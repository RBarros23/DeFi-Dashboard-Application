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
exports.getWalletByAddress = exports.getWalletByUserId = exports.getWalletById = exports.getAllWallets = exports.createWallet = void 0;
const db_1 = __importDefault(require("../db"));
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
const createWallet = (id, user_id, encrypted_wallet_address) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('INSERT INTO wallet_addresses(user_id, encrypted_wallet_address) VALUES($1, $2) RETURNING *', [user_id, encrypted_wallet_address]);
    return rows[0];
});
exports.createWallet = createWallet;
const getAllWallets = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM wallet_addresses');
    return rows;
});
exports.getAllWallets = getAllWallets;
const getWalletById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM wallet_addresses WHERE id = $1', [id]);
    return rows[0];
});
exports.getWalletById = getWalletById;
const getWalletByUserId = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM wallet_addresses WHERE user_id = $1', [user_id]);
    return rows[0];
});
exports.getWalletByUserId = getWalletByUserId;
const getWalletByAddress = (encrypted_wallet_address) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM wallet_addresses WHERE encrypted_wallet_address = $1', [encrypted_wallet_address]);
    return rows[0];
});
exports.getWalletByAddress = getWalletByAddress;
