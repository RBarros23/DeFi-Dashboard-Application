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
const express_1 = __importDefault(require("express"));
const blockchainService_1 = require("../web3models/blockchainService");
const web3Client_1 = __importDefault(require("../web3models/web3Client"));
const ethPrice_1 = __importDefault(require("../web3models/ethPrice"));
const router = express_1.default.Router();
router.get('/balance/:address', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const address = req.params.address;
    try {
        const balance = yield (0, blockchainService_1.getEthBalance)(address);
        res.send(200).json({ balance: web3Client_1.default.utils.fromWei(balance, 'ether') });
    }
    catch (error) {
        res.status(500).send('Failed to fetch balance');
    }
}));
router.get('/lastBlock', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const balance = yield (0, blockchainService_1.getBlockNumber)();
        res.send(200).json({ lastBlock: web3Client_1.default.utils.fromWei(balance, 'ether') });
    }
    catch (error) {
        res.status(500).send('Failed to fetch last block');
    }
}));
router.get('/getAllAccounts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield (0, blockchainService_1.getAccounts)();
        res.send(200).json({ accounts });
    }
    catch (error) {
        res.status(500).send('Failed to fetch all accounts');
    }
}));
router.get('/price', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const price = yield (0, ethPrice_1.default)();
        res.json({ price: price });
    }
    catch (error) {
        res.status(500).send({ error: 'Failed to fetch ETH price' });
    }
}));
exports.default = router;
