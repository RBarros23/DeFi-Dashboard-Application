"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const web3Instance = new web3_1.default(new web3_1.default.providers.HttpProvider('https://mainnet.infura.io/v3/9b5a4239d6ee466c925a060a7d04d885'));
exports.default = web3Instance;
