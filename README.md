# Broadcast Server

**Broadcast Server** is a Node.js CLI-based application that enables real-time communication between connected clients. Utilizing Socket.IO, Express, and Commander, this project demonstrates how to create a robust, event-driven messaging system that broadcasts messages to all clients in a network. Whether used for a simple chat application or as a foundation for real-time collaboration tools, Broadcast Server offers a clean, modular design and an intuitive command-line interface. A server that can broadcast messages to connected clients. Project idea gotten from [here](https://roadmap.sh/projects/broadcast-server).

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [License](#license)

---

## Overview

Broadcast Server is designed to facilitate real-time messaging by broadcasting any message received from one client to all other connected clients. The server is built on Express and Socket.IO, ensuring scalability and efficient handling of WebSocket connections. A well-structured CLI powered by Commander allows you to start the server or connect as a client with ease. With comprehensive logging using Chalk, the application provides clear, color-coded feedback for every event, from successful connections to error handling.

---

## Features

- **Real-Time Messaging:**  
  Leverages Socket.IO to manage WebSocket connections for instant message broadcasting.

- **CLI Interface:**  
  Utilizes Commander to provide a user-friendly command-line interface for starting the server and connecting as a client.

- **Express Integration:**  
  Integrates with Express to serve as a robust HTTP foundation, enabling seamless upgrades to WebSocket connections.

- **Color-Coded Logging:**  
  Implements Chalk for color-coded logging, making it easier to distinguish between different events such as connections, disconnections, errors, and message traffic.

- **Dynamic Client Management:**  
  Maintains an in-memory list of connected clients and automatically updates the list as clients connect or disconnect.

- **Environment Configurable:**  
  Uses dotenv for environment-based configuration, allowing flexible port configuration and other settings.

---

## Installation

### Prerequisites

- Node.js
- npm

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kxng0109/node-broadcast-server.git
   cd node-broadcast-server
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the project root to override default settings (e.g., `PORT=3000`).

---

## Usage

### Starting the Server

To start the broadcast server, run the following command:

```bash
npm start
```

Upon execution, the server listens on the configured port (default is 3000) and logs connection events, message broadcasts, and disconnections using color-coded messages.

### Connecting as a Client

To connect to the server as a client, open a new terminal window and execute:

```bash
npm run connect
```

The client connects to the server, displays a confirmation message along with its unique socket ID, and allows you to send messages via standard input. All broadcasted messages from the server are displayed in real time.

---

Or you to create a global link, in the project's directory, run the following command:
```bash
npm link
```
This command symlinks your package to the global node_modules, making the broadcast-server command available system-wide.

This means that you can instead start the server using:
```bash
broadcast-server start
```
And connect as a client using:
```bash
broadcast-server connect
```

---

## Project Structure

```
.
├── app.js         # CLI entry point for starting the server or client
├── client.js      # Client-side implementation for connecting and sending messages
├── server.js      # Server-side implementation for handling connections and message broadcasting
├── package.json   # Project metadata, scripts, and dependencies
├── .env           # Environment configuration (if provided)
└── README.md      # Documentation file
```

### Detailed File Descriptions

- **app.js:**  
  Acts as the central command-line interface for the project. It uses Commander to define and parse the commands `start` (to launch the server) and `connect` (to launch the client).

- **server.js:**  
  Establishes an HTTP server using Express and Socket.IO, listens for client connections, manages an in-memory list of client IDs, and handles real-time message broadcasting. Events are logged using Chalk to provide visual feedback regarding server operations.

- **client.js:**  
  Connects to the broadcast server via Socket.IO, sends messages entered via the terminal, and displays incoming messages. It handles connection events, errors, and disconnections with detailed, color-coded logging.

---

## Configuration

This project uses [dotenv](https://www.npmjs.com/package/dotenv) to manage environment variables. Create a `.env` file in the root directory to configure:

- `PORT` – The port on which the server runs (default is 3000).

Example `.env` file:

```
PORT=3000
```

---

## Dependencies

The project leverages several key packages:

- **Express:**  
  A minimal and flexible Node.js web application framework for creating robust APIs and HTTP servers.

- **Socket.IO & Socket.IO-Client:**  
  Libraries for enabling real-time, bidirectional communication between the server and clients over WebSockets.

- **Commander:**  
  A complete solution for parsing command-line arguments, allowing for an intuitive CLI.

- **Chalk:**  
  A library for styling terminal strings, used here for color-coded logging.

- **dotenv:**  
  Loads environment variables from a `.env` file into `process.env`, making configuration management simple and effective.

- **nodemon (dev dependency):**  
  A utility that automatically restarts the node application when file changes in the directory are detected.

---

## License

Broadcast Server is licensed under the [AGPL-3.0 License](https://opensource.org/licenses/GPL-3.0). Please see the LICENSE file for more details.

---