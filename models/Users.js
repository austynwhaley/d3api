"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/User.js
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
const UserModel = mongoose_1.default.model("users", UserSchema);
exports.default = UserModel;
