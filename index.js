"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.js
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_js_1 = __importDefault(require("./routes/userRoutes.js"));
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb://localhost:27017/d3db').then(() => {
    console.log("Connected to db");
}).catch((err) => {
    console.log(err);
});
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // parse JSON bodies
app.use(userRoutes_js_1.default);
app.get("/", (req, res) => {
    console.log('Request received:', req.method, req.url);
    res.send('Hello World!');
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
