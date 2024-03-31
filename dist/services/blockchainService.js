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
exports.getBlockNumber = exports.getEthBalance = void 0;
const web3Client_1 = __importDefault(require("./web3Client"));
const getEthBalance = (address) => __awaiter(void 0, void 0, void 0, function* () {
    const balance = yield web3Client_1.default.eth.getBalance(address);
    return balance;
});
exports.getEthBalance = getEthBalance;
const getBlockNumber = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastBlock = web3Client_1.default.eth.getBlockNumber();
    return lastBlock;
});
exports.getBlockNumber = getBlockNumber;
