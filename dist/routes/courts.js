"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courts_1 = require("../controllers/courts");
const validators_1 = require("../middlewares/validators");
const router = (0, express_1.Router)();
router.get('/', courts_1.getAllCourts);
router.get('/id/:id', validators_1.courtIdValidators, validators_1.validateRequest, courts_1.getCourtById);
router.get('/code/:code', validators_1.courtCodeValidators, validators_1.validateRequest, courts_1.getCourtByCode);
router.get('/abbr/:abbr', validators_1.courtAbbrValidators, validators_1.validateRequest, courts_1.getCourtByAbbr);
exports.default = router;
