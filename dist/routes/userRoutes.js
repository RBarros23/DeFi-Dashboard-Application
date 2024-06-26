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
const UserModel = __importStar(require("../models/users"));
const hashPassword_1 = require("../utils/hashPassword");
const router = (0, express_1.Router)();
//Create a new user
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const passwordHash = yield (0, hashPassword_1.hashPassword)(password);
        const newUser = yield UserModel.createUser(email, passwordHash);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}));
//Get all users
router.get('/getAllUsers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield UserModel.getAllUsers();
        res.status(200).json(allUsers);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting all users', error });
    }
}));
//Get user by email
router.get('/getUserByEmail/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const user = yield UserModel.getUserByEmail(email);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting user by email', error });
    }
}));
//Get user by id
router.get('/getUserById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield UserModel.getUserById(id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting user by id', error });
    }
}));
exports.default = router;
