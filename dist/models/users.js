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
exports.getUserById = exports.getUserByEmail = exports.getAllUsers = exports.createUser = void 0;
const db_1 = __importDefault(require("../db"));
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
const createUser = (email, passwordHash) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('INSERT INTO users(email, password_hash) VALUES($1, $2) RETURNING *', [email, passwordHash]);
    return rows[0];
});
exports.createUser = createUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM users');
    return rows;
});
exports.getAllUsers = getAllUsers;
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0];
});
exports.getUserByEmail = getUserByEmail;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield db_1.default.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows[0];
});
exports.getUserById = getUserById;
