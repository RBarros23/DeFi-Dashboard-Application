import pool from "../db";

/**
 * Wallet have: id, user_id and encrypted_wallet_address
 * 
 * Script used to create the table:
CREATE TABLE wallet_addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    encrypted_wallet_address TEXT NOT NULL
);
 */

export const createWallet = async (id: string, user_id: string, encrypted_wallet_address: string) => {
    const { rows } = await pool.query('INSERT INTO wallet_addresses(user_id, encrypted_wallet_address) VALUES($1, $2) RETURNING *', [user_id, encrypted_wallet_address]);
    return rows[0];
}

export const getAllWallets = async () => {
    const { rows } = await pool.query('SELECT * FROM wallet_addresses');
    return rows;
}

export const getWalletById = async (id: string) => {
    const { rows } = await pool.query('SELECT * FROM wallet_addresses WHERE id = $1', [id]);
    return rows[0];
}

export const getWalletByUserId = async (user_id: number) => {
    const { rows } = await pool.query('SELECT * FROM wallet_addresses WHERE user_id = $1', [user_id]);
    return rows[0];
}

export const getWalletByAddress = async (encrypted_wallet_address: string) => {
    const { rows } = await pool.query('SELECT * FROM wallet_addresses WHERE encrypted_wallet_address = $1', [encrypted_wallet_address]);
    return rows[0];
}