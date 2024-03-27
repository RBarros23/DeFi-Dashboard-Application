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
const UserModel = __importStar(require("../models/walletAddress"));
const router = (0, express_1.Router)();
//Create a new transaction
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, encrypted_wallet_address } = req.body;
        const newWallet = yield UserModel.createWallet(userId, encrypted_wallet_address);
        res.status(201).json(newWallet);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating wallet', error });
    }
}));
//Get all users
router.get('/getAllWallets', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allWallets = yield UserModel.getAllWallets();
        res.status(200).json(allWallets);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting all wallets', error });
    }
}));
//Get user by id
router.get('/getWalletById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const WalletById = yield UserModel.getWalletById(id);
        res.status(200).json(WalletById);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting wallet by user', error });
    }
}));
//Get user by userId
router.get('/getWalletByUserId/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const wallet = yield UserModel.getWalletByUserId(userId);
        res.status(200).json(wallet);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting wallet by user ID', error });
    }
}));
//Get user by userId
router.get('/getWalletByAddress/:address', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.params;
        const wallet = yield UserModel.getWalletByAddress(address);
        res.status(200).json(wallet);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting wallet by user ID', error });
    }
}));
exports.default = router;
