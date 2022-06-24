"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errMiddleware = (err, req, res, next) => {
    // TODO log errors
    res.status(500).json({ error: true, message: err.message });
};
exports.default = errMiddleware;
