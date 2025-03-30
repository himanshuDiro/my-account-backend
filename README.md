# My-Account Backend

This repository contains the backend API for the My-Account application, built with Nest.js.

## Overview

This backend provides:
- REST API endpoint to get all users from a PostgreSQL database
- Integration with shared ORM library for entity definitions
- User settings management through TypeORM

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- The shared-orm-library repository (for entity definitions)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/my-account-backend.git
cd my-account-backend
```

2. Install dependencies:
```bash
npm install
```

3. Setup your environment variables:
Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=my-account
```

## Database Setup

1. Ensure PostgreSQL is running
2. Create the database:
```bash
psql postgres -c "CREATE DATABASE \"my-account\""
```
3. Install and run migrations from the shared-orm-library repository to set up the tables and sample data.

## Running the Application

```bash
# Development mode
npm run start

# Watch mode (auto-reload on changes)
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The server will start on the port specified in your .env file (default: 3000).

## API Endpoints

### GET /users

Returns a list of all users with their settings.

**Response:**
```json
[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "settings": {
      "id": 1,
      "isNotificationEnabled": true,
      "isNewDashboardEnabled": false,
      "timezone": "UTC"
    }
  }
]
```

## Project Structure

```
my-account-backend/
├── src/
│   ├── users/                    # Users feature module
│   │   ├── users.controller.ts   # REST API endpoints
│   │   ├── users.module.ts       # Module configuration
│   │   └── users.service.ts      # Business logic & data access
│   ├── app.controller.ts         # App controller
│   ├── app.module.ts             # Main app module configuration
│   ├── app.service.ts            # App service
│   └── main.ts                   # Application entry point
├── test/                         # Test files
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## Testing

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## License

MIT