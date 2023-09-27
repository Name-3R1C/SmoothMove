# Smooth Move

Smooth Move is a user-friendly web application designed to streamline the process of buying and selling properties. It aims to provide a one-stop platform for users to manage their real estate transactions efficiently.

# Installation

1. Clone the repository:

```
git clone https://github.com/shovon231/LHLFinal
```
2. Install dependencies:
```
bundle install
```

# Usage
1. Ensure database is set up (see Database section for details)
2. Run the server:
cd into server directory
```
node index.js
```
3. Run client
```
npm start
```
Open a web browser and navigate to http://localhost:3000 to access Smooth Move.


# Database
Smooth Move uses a PostgreSQL database to store property and user information. To set up the database, follow these steps:
1. Install PostgreSQL (if not already installed).
2. Create a new PostgreSQL database called `smoothmove`
```
CREATE DATABASE smoothmove;
```
3. Navigate to the database:
```
\c smoothmove
```
4. create the necessary tables and populate them with sample data:
```
\i migrations/01_schema.sql
```

# Dependencies
