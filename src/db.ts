import { Pool } from 'pg';

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'defiAppDB',
    password: '',
    port: 5432,
});

export default pool;
