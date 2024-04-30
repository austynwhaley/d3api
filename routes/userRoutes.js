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
// routes/userRoutes.js
const express_1 = __importDefault(require("express"));
const Users_1 = __importDefault(require("../models/Users"));
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
const upload = (0, multer_1.default)();
router.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Users_1.default.find({});
        res.json(users);
    }
    catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: "An error occurred while fetching users." });
    }
}));
router.post("/users", upload.any(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Received request:', req.body);
        const newUser = yield Users_1.default.create(req.body);
        console.log('Created user:', newUser);
        res.status(201).json(newUser);
    }
    catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: "An error occurred while creating user." });
    }
}));
exports.default = router;
