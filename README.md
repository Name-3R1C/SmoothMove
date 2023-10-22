# Welcome to "Smooth Move" - Your Trusted Rental and Property Search Platform!

In a world where finding the perfect rental property real estate can be complex, "SmoothMove" emerges as your ideal companion in simplifying the property search and listing experience. Our intuitive web application is crafted to seamlessly navigate this journey, offering a one-stop platform for users to effortlessly manage their property rentals and property searches

# Features

- User Registration and Profiles.
- Property Listings.
- Property Search.
- User Dashboard.
- Property Detail.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

# Installation

### Database Setup

1. You will need PostgreSQL to use this application; please ensure that it is installed. If not, you can download PostGreSQL [here](https://www.postgresql.org/about/).
2. Start PostgreSQL: `psql` - please note that if you are on WSL, you will need to use the following command first: `startposgresql`.
3. Create a database with the command `CREATE DATABASE smoothmove;`.
4. Create a file name `.env.development`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

4. Clone the repository:

```
git clone https://github.com/shovon231/LHLFinal
```

2. Install dependencies in both Serve and Client directory

```
npm install
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
\i seeds/01_users.sql
```

# Dependencies
