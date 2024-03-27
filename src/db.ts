import { Pool } from 'pg';

const pool = new Pool({
    user: 'ruibarros',
    host: 'localhost',
    database: 'defiAppDB',
    password: 'espinho23',
    port: 5432,
});

export default pool;
