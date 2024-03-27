import pool from "../db";

/**
 * User have: id, email and password encrypted
 * 
 * Script used to create the table:
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);
CREATE TABLE
 */


export const createUser = async (email: string, passwordHash: string) => {
    const { rows } = await pool.query('INSERT INTO users(email, password_hash) VALUES($1, $2) RETURNING *', [email, passwordHash]);
    return rows[0];
};

export const getAllUsers = async () => {
    const { rows } = await pool.query('SELECT * FROM users');
    return rows;
}

export const getUserByEmail = async (email: string) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0];
};

  
export const getUserById = async (id: string) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    return rows[0];
}

