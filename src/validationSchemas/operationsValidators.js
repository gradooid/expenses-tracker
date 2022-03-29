import * as Yup from 'yup';

import { OperationType } from '../utils/constants.js';

export const createOperation = Yup.object().shape({
  amount: Yup.number().min(0).required(),
  type: Yup.string().oneOf(Object.values(OperationType)).required(),
  contact: Yup.string().max(64).optional(),
  comment: Yup.string().max(255).optional(),
});

export const updateOperation = Yup.object().shape({
  ...createOperation,
});
