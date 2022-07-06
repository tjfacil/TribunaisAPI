import { RequestHandler } from 'express';
import { param, query, validationResult } from 'express-validator';

export const abbrValidators = [
  param('abbr').not().isEmpty().trim().escape().isAlpha(),
];

export const codeValidators = [param('code').trim().escape().isNumeric()];

export const idValidators = [param('id').trim().escape().not().isEmpty()];

export const limitValidators = [
  query('limit').optional().trim().escape().isNumeric(),
  query('skip').optional().trim().escape().isNumeric(),
];

export const validateRequest: RequestHandler = (req, res, next) => {
  const requestErrors = validationResult(req);
  if (!requestErrors.isEmpty()) {
    return res.status(400).json({ error: true, message: 'Bad request' });
  }
  next();
};
