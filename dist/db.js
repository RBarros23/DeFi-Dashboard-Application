"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'ruibarros',
    host: 'localhost',
    database: 'defiAppDB',
    password: 'espinho23',
    port: 5432,
});
exports.default = pool;
