"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const transactionRoutes_1 = __importDefault(require("./routes/transactionRoutes"));
const walletRoutes_1 = __importDefault(require("./routes/walletRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const authenticateToken_1 = require("./middleware/authenticateToken");
const authenticate_1 = __importDefault(require("./routes/authenticate"));
const web3Route_1 = __importDefault(require("./routes/web3Route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/login', authenticate_1.default);
//Route for users
app.use('/users', authenticateToken_1.authenticateToken, userRoutes_1.default);
//Route for transactions
app.use('/transactions', authenticateToken_1.authenticateToken, transactionRoutes_1.default);
//Route for wallets
app.use('/wallet', authenticateToken_1.authenticateToken, walletRoutes_1.default);
//Route for web3
app.use('/web3', authenticate_1.default, web3Route_1.default);
app.get('/', (req, res) => {
    res.send('Hello, blockchain world!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
