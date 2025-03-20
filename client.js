import chalk from "chalk";
import { config } from "dotenv";
import { stdin } from "node:process";
import { io } from "socket.io-client";
config();

stdin.setEncoding("utf8");
const PORT = process.env.PORT || 3000;
const serverURL = `http://localhost:${PORT}/`;

const clientConnection = () => {
	const socket = io(serverURL);
	try {
		socket.on("connect", () => {
			console.log(
				chalk.greenBright(
					"Successfully connected to server with id: ",
					socket.id,
				),
			);
		});

		stdin.resume();
		stdin.on("data", (data) => {
			const input = data.trim();
			if (input) {
				socket.emit("chat message", { id: socket.id, msg: input });
			}
		});

		socket.on("chat message", (message) => {
			console.log(chalk.blueBright(message));
		});

		socket.on("connect_error", (err) => {
			if (socket.active) {
				console.log(chalk.yellowBright("Reconnecting...."));
			} else {
				console.error(
					chalk.redBright(
						`An error occurred while connecting to server. ${err}`,
					),
				);
				socket.disconnect();
				process.exit(1);
			}
		});

		socket.on("error", (err) => {
			console.error(chalk.redBright(err));
			socket.disconnect();
			process.exit(1);
		});

		socket.on("disconnect", (reason, details) => {
			console.log(chalk.yellowBright(`Disconnected due to, ${reason}.`));
			if(details && details.description){
				console.log(chalk.yellowBright(details.description));
			}
		});

	} catch (err) {
		socket.disconnect();
		console.error(chalk.redBright(err));
		process.exit(1);
	}
};

export default clientConnection;
