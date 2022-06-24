"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Court = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: { type: String, required: true },
    code: { type: String, required: true },
    abbr: { type: String, required: true },
    name: { type: String, required: true },
    mainPage: { type: String, required: true },
    firstPhysicalSearchPage: { type: String, required: true },
    firstElectronicSearchPage: { type: String, required: true },
    secondElectronicSearchPage: { type: String, required: true },
    secondPhysicalSearchPage: { type: String, required: true },
}, { collection: 'courts' });
exports.Court = (0, mongoose_1.model)('Court', schema);
