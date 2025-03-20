#!/usr/bin/env node
import { Command } from "commander";
import { config } from "dotenv";
import clientConnection from "./client.js";
import startServer from "./server.js";
config();

const program = new Command();

program
	.name("broadcast-server")
	.description("A server that can broadcast messages to connected clients.");

program
	.command("start")
	.description("Start the broadcast server.")
	.action(async() => await startServer());

program
	.command("connect")
	.description("Connect to the server as a client.")
	.action(() => clientConnection());

program.parse();
