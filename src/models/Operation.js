import mongoose from 'mongoose';

import { OperationType } from '../utils/constants.js';

const { Schema, model } = mongoose;

const OperationSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    type: {
      type: String,
      enum: Object.values(OperationType),
      required: true,
      default: OperationType.EXPENSE,
    },
    contact: {
      type: String,
      default: 'unknown',
      required: false,
      maxLength: 64,
    },
    comment: {
      type: String,
      requried: false,
      default: null,
      maxLength: 255,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('operation', OperationSchema);
