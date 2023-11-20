# Multiplayer Chess App

Welcome to the Chess App! This project is a simple yet engaging multiplayer chess application built using ReactJS for the client-side and ExpressJS with NodeJS for the server-side. The app uses TCP connection and implements socket.io for real-time communication between players.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KhevJ/chess-app.git


2. Navigate to the server directory

   ```bash
   cd server
   npm install  && npm start

3. Now, make another terminal and navigate to the client directory

   ```bash
   cd client
   npm install && npm start


## Features

1. **Input Your Name:**
   - Before joining or starting a game, users can input their names, personalizing their gaming experience.

2. **Start a New Game:**
   - Initiate a new chess game and receive a unique game code. This code serves as the identifier for your game.

3. **Join Existing Game:**
   - Enter a provided game code to join an existing game. This allows users to connect with friends and participate in ongoing matches.

4. **Real-time Multiplayer Chess:**
   - Enjoy a seamless and interactive multiplayer chess experience facilitated by socket.io. Moves and game progress are communicated in real-time, providing a dynamic gaming atmosphere.
  
 ## Deployment

 You can also use the deployed app here -> https://chess-game-8e69b6359bbf.herokuapp.com/







