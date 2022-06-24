"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const error_1 = __importDefault(require("./middlewares/error"));
const notfound_1 = __importDefault(require("./middlewares/notfound"));
const courts_1 = __importDefault(require("./routes/courts"));
require('dotenv').config();
const port = process.env.PORT || '3000';
const mongoUri = process.env.MONGO_URI || '';
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use('/courts', courts_1.default);
app.use(notfound_1.default);
app.use(error_1.default);
mongoose_1.default
    .connect(mongoUri)
    .then(() => {
    app.listen(port, () => {
        console.log('Listening on: ' + port);
    });
})
    .catch((e) => {
    console.log(e);
});
