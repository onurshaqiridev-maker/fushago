// One shared connection to the SQLite database (backend/prisma/dev.db).
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;
