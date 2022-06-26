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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourtByAbbr = exports.getCourtByCode = exports.getCourtById = exports.getCourtsSummary = exports.getAllCourts = void 0;
const court_1 = require("../models/court");
const getAllCourts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const courts = yield court_1.Court.find();
    res.status(200).json({ total: courts.length, courts: courts });
});
exports.getAllCourts = getAllCourts;
const getCourtsSummary = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const courts = yield court_1.Court.find({}, { name: 1, abbr: 1, code: 1 });
    res.status(200).json({ total: courts.length, courts: courts });
});
exports.getCourtsSummary = getCourtsSummary;
const getCourtById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const courtId = req.params.id;
    const court = yield court_1.Court.findById(courtId);
    res.status(200).json({ court: court });
});
exports.getCourtById = getCourtById;
const getCourtByCode = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const courtCode = req.params.code;
    const court = yield court_1.Court.find({ code: courtCode });
    res.status(200).json({ court: court });
});
exports.getCourtByCode = getCourtByCode;
const getCourtByAbbr = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const courtAbbr = req.params.abbr.toUpperCase();
    const court = yield court_1.Court.find({ abbr: courtAbbr });
    res.status(200).json({ court: court });
});
exports.getCourtByAbbr = getCourtByAbbr;
