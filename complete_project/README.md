# Flash Loans Arbitrage Bot

A sophisticated arbitrage bot that exploits price differences across decentralized exchanges (DEX) using either flash loans or wallet liquidity. The bot operates through a private web interface, ensuring a professional and exclusive user experience.

## Key Features

*   **Opportunity Discovery**: Scans market every 3-10 seconds for profitable arbitrage opportunities
*   **Liquidity Strategies**: Supports both wallet liquidity and flash loans
*   **DEX Integration**: Connects with major platforms like Uniswap, SushiSwap, PancakeSwap, and more
*   **Flash Loan Integration**: Works with Aave, dYdX, Uniswap V3 Flash Swaps, and others
*   **Advanced UI**: Interactive design with opportunity display, trade history, and profit/loss charts
*   **Control Options**: Toggle scanner, auto-execution, and configure advanced settings
*   **Security**: Private key protection using AES 256-bit encryption

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js**: Version `20.x` or higher (Check with `node -v`)
*   **npm**: Version `10.x` or higher (Usually comes with Node.js, check with `npm -v`)
*   **MongoDB**: A running instance (local or remote). You will need the connection URI.
*   **Redis**: A running instance (local or remote). You will need the host, port, and password (if applicable).
*   **Git**: For cloning the repository.

## Installation and Setup

Follow these steps carefully to set up the project locally:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/nawaf602/NBot.git
    cd NBot
    ```

2.  **Install Dependencies**:
    This project uses specific versions of dependencies to ensure compatibility. Run the following command to install the exact versions listed in `package.json`:
    ```bash
    npm install
    ```
    *Troubleshooting*: If you encounter installation issues, try removing `node_modules` and `package-lock.json` and running `npm install` again:
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```

3.  **Configure Environment Variables**:
    Copy the example environment file and fill in your specific configuration details:
    ```bash
    cp .env.example .env
    ```
    Now, edit the `.env` file with your details:
    *   `NODE_ENV`: Set to `development` for local setup.
    *   `PORT`: The port the backend server will run on (e.g., `5000`).
    *   `MONGODB_URI`: Your MongoDB connection string.
    *   `REDIS_HOST`: Redis server host (e.g., `127.0.0.1`).
    *   `REDIS_PORT`: Redis server port (e.g., `6379`).
    *   `REDIS_PASSWORD`: Your Redis password (leave empty if none).
    *   `JWT_SECRET`: A strong, random secret key for signing authentication tokens.
    *   `JWT_EXPIRATION`: Access token expiration time (e.g., `1h`).
    *   `REFRESH_TOKEN_EXPIRATION`: Refresh token expiration time (e.g., `7d`).
    *   `WEB3_PROVIDER_URL`: Your Ethereum node provider URL (e.g., Infura, Alchemy).
    *   `PRIVATE_KEY_ENCRYPTION_KEY`: A strong key for encrypting wallet private keys.

4.  **Build the Project**:
    Compile the TypeScript code into JavaScript:
    ```bash
    npm run build
    ```
    *Troubleshooting*: If the build fails, ensure all dependencies listed in `package.json` were installed correctly in step 2. Check the error messages for specific TypeScript or Webpack issues.

## Running the Project

1.  **Start the Backend Server**:
    Run the compiled JavaScript code:
    ```bash
    npm start
    ```
    The backend server should now be running on the port specified in your `.env` file.

2.  **Start the Frontend UI (Development Mode)**:
    In a separate terminal, navigate to the UI directory and start the Next.js development server:
    ```bash
    cd src/ui
    npm install # Install UI-specific dependencies if not already done
    npm run dev
    ```
    The UI should be accessible at `http://localhost:3000` (or the port specified by Next.js).

## Key Dependencies and Versions

For reference, here are some of the key dependencies and their tested versions:

*   `node`: `^20.18.0`
*   `npm`: `^10.7.0`
*   `typescript`: `^5.8.3`
*   `ethers`: `^5.8.0` (Important: Version 5 is used)
*   `express`: `^4.21.2`
*   `mongoose`: `^8.14.1`
*   `ioredis`: `^5.6.1`
*   `jsonwebtoken`: `^9.0.2`
*   `@types/jsonwebtoken`: `^8.5.9` (Important: Version 8 is used for compatibility)
*   `bcrypt`: `^5.1.1`
*   `cors`: `^2.8.5`
*   `helmet`: `^8.1.0`
*   `dotenv`: `^16.5.0`
*   `winston`: `^3.17.0`
*   `uuid`: `^11.1.0`
*   `webpack`: `^5.99.7`
*   `jest`: `^29.7.0`

## Architecture

The bot is built with a modular architecture:

*   **Core Logic**: Handles opportunity discovery and profit calculation
*   **DEX Adapters**: Interfaces with various decentralized exchanges
*   **Flash Loan Adapters**: Manages flash loan interactions
*   **User Interface**: React-based frontend with TailwindCSS
*   **Control System**: Manages bot operation and configuration

## Security

This bot implements several security measures:

*   AES 256-bit encryption for private keys
*   Secure communications via HTTPS
*   Transaction auditing system
*   Two-factor authentication for control panel access

## License

This project is private and exclusively for the owner's use. It cannot be shared or distributed.

## Disclaimer

Trading cryptocurrencies involves risk. This bot is provided as-is with no guarantees of profit or performance. Always use at your own risk and never invest more than you can afford to lose.

