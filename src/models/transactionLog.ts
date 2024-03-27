import pool from '../db';

/**
 * transaction_logs have: id, user_id, transaction_type, amount, currency and timestamp
 * 
 * Script used to create the table:
CREATE TABLE transaction_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    transaction_type VARCHAR(50) NOT NULL,
    amount DECIMAL NOT NULL,
    currency VARCHAR(50) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
 */

export const createTransactionLog = async (userId: number, transactionType: string, amount: number, currency: string) => {
  const userIdString = userId.toString();
  const amountString = amount.toString();
  const { rows } = await pool.query('INSERT INTO transaction_logs(user_id, transaction_type, amount, currency) VALUES($1, $2, $3, $4) RETURNING *', [userIdString, transactionType, amountString, currency]);
  return rows[0];
};

export const getAllTransactions = async (id: number) => {
  const { rows } = await pool.query('SELECT * FROM transaction_logs');
  return rows;
};

export const getTransactionsByUserId = async (userId: number) => {
  const { rows } = await pool.query('SELECT * FROM transaction_logs WHERE user_id = $1', [userId]);
  return rows;
};

export const getTransactionsById = async (id: number) => {
  const { rows } = await pool.query('SELECT * FROM transaction_logs WHERE id = $1', [id]);
  return rows;
};


