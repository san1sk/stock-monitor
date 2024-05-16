# Stock Monitor

## Overview

Users can login or signup with their id and search for stocks and can add it to their watchlist. The stocks watchlisted by the user will be stored under the watchlist category

It uses auth0 for user authentication, MongoDB for database and fetches the stock information from the alphavantage api.

## Features

- User Authentication
- Stock Charts
- Watchlists
- material UI

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)
- [MongoDB](https://www.mongodb.com/) (for database)
- [Vite](https://vitejs.dev/)

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Installation

1. **Clone the repository:**
   ```sh
   https://github.com/san1sk/stock-monitor.git
   ```
2. **Install dependicies**
   ```sh
   npm i
   ```
3. **Run the server :**
   ```sh
   cd backend
   nodemon server.js
   ```
4. **Run the frontend :**
   ```sh
   cd frontend
   npm run dev
5. **Open your localhost**

### Usage

- Login/Signup - click on login/signup button
- watchlist - Watchlist stocks and view them in watchlists
- charts - In the current section charts can be viewed

  
