import { RequestHandler } from 'express';
import { param, validationResult } from 'express-validator';

export const courtAbbrValidators = [
  param('abbr').not().isEmpty().trim().escape().isAlpha(),
];

export const courtCodeValidators = [param('code').trim().escape().isNumeric()];

export const courtIdValidators = [param('id').trim().escape().not().isEmpty()];

export const validateRequest: RequestHandler = (req, res, next) => {
  const requestErrors = validationResult(req);
  if (!requestErrors.isEmpty()) {
    return res.status(400).json({ error: true, message: 'Bad request' });
  }
  next();
};
