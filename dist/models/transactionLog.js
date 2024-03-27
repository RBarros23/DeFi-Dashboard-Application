"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionsById = exports.getTransactionsByUserId = exports.getAllTransactions = exports.createTransactionLog = void 0;
const db_1 = __importDefault(require("../db"));
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
const createTransactionLog = (userId, transactionType, amount, currency) => __awaiter(void 0, void 0, void 0, function* () {
    const userIdString = userId.toString();
    const amountString = amount.toString();
    const { rows } = yield db_1.default.query('INSERT INTO transaction_logs(user_id, transaction_type, amount, currency) VALUES($1, $2, $3, $4) RETURNING *', [userIdString, transactionType, amountString, currency]);
    return rows[0];
});
exports.createTransactionLog = createTransactionLog;
const getAllTransactions = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM transaction_logs');
    return rows;
});
exports.getAllTransactions = getAllTransactions;
const getTransactionsByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM transaction_logs WHERE user_id = $1', [userId]);
    return rows;
});
exports.getTransactionsByUserId = getTransactionsByUserId;
const getTransactionsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM transaction_logs WHERE id = $1', [id]);
    return rows;
});
exports.getTransactionsById = getTransactionsById;
