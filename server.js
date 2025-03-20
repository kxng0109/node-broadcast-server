import chalk from "chalk";
import { config } from "dotenv";
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
config();

const app = express();
const PORT = process.env.PORT || 3000;
const server = createServer(app);

const startServer = async () => {
	try {
		const connectionList = [];
		server.listen(PORT, () =>
			console.log(chalk.cyanBright(`Server running on port ${PORT}`)),
		);

		const io = new Server(server, {
			connectionStateRecovery: {},
		});

		io.on("connection", (socket) => {
			console.log(
				chalk.greenBright(
					`A client has connected with id: ${socket.id}`,
				),
			);
			connectionList.push(socket.id);

			socket.on("chat message", (data) => {
				const msg = `Message from ${data.id}: ${data.msg}`;
				socket.broadcast.emit("chat message", msg);
			});

			socket.on("disconnect", () => {
				const index = connectionList.indexOf(socket.id);
				connectionList.splice(index, 1);

				console.log(
					chalk.yellowBright(`Client disconnected: ${socket.id}`),
				);
			});
		});
	} catch (err) {
		console.error(chalk.redBright(err));
	}
};

export default startServer;
