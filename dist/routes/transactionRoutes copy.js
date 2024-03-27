"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserModel = __importStar(require("../models/transactionLog"));
const router = (0, express_1.Router)();
//Create a new transaction
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, transactionType, amount, currency } = req.body;
        const newTransaction = yield UserModel.createTransactionLog(userId, transactionType, amount, currency);
        res.status(201).json(newTransaction);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}));
//Get all users
router.get('/getAllTransactions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllTransactions = yield UserModel.getAllTransactions();
        res.status(201).json(getAllTransactions);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting all users', error });
    }
}));
//Get user by email
router.get('/getTransactionsByUserId/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const userIdNumber = parseInt(userId, 10);
        if (isNaN(userIdNumber)) {
            return res.status(400).json({ message: 'userId is not a valid number' });
        }
        const transaction = yield UserModel.getTransactionsById(userIdNumber);
        res.status(201).json(transaction);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting all users', error });
    }
}));
//Get user by id
router.get('/getTransactionsById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userIdNumber = parseInt(id, 10);
        if (isNaN(userIdNumber)) {
            return res.status(400).json({ message: 'userId is not a valid number' });
        }
        const user = yield UserModel.getTransactionsById(userIdNumber);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting all users', error });
    }
}));
exports.default = router;
