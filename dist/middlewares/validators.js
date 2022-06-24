"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = exports.courtIdValidators = exports.courtCodeValidators = exports.courtAbbrValidators = void 0;
const express_validator_1 = require("express-validator");
exports.courtAbbrValidators = [
    (0, express_validator_1.param)('abbr').not().isEmpty().trim().escape().isAlpha(),
];
exports.courtCodeValidators = [(0, express_validator_1.param)('code').trim().escape().isNumeric()];
exports.courtIdValidators = [(0, express_validator_1.param)('id').trim().escape().not().isEmpty()];
const validateRequest = (req, res, next) => {
    const requestErrors = (0, express_validator_1.validationResult)(req);
    if (!requestErrors.isEmpty()) {
        return res.status(400).json({ error: true, message: 'Bad request' });
    }
    next();
};
exports.validateRequest = validateRequest;
