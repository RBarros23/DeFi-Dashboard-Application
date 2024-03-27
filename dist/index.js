"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const transactionRoutes_1 = __importDefault(require("./routes/transactionRoutes"));
const walletRoutes_1 = __importDefault(require("./routes/walletRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Route for users
app.use('/users', userRoutes_1.default);
//Route for transactions
app.use('/transactions', transactionRoutes_1.default);
//Route for wallets
app.use('/wallet', walletRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello, blockchain world!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
