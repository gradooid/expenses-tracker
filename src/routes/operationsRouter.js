import express from 'express';

import Operation from '../models/Operation.js';
import {
  createOperation,
  updateOperation,
} from '../validationSchemas/operationsValidators.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const operations = await Operation.find(null, null, {
      sort: {
        createdAt: -1,
      },
    });

    res.json(operations);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const targetOperation = await Operation.findById(req.params.id);

    if (!targetOperation) {
      res.status(404);
      throw new Error(`Operation ${req.params.id} not found`);
    }

    res.json(targetOperation);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    await createOperation.validate(req.body, {
      abortEarly: false,
    });

    const newOperation = await Operation.create(req.body);
    res.json(newOperation);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await updateOperation.validate(req.body, {
      abortEarly: false,
    });

    const targetOperation = await Operation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!targetOperation) {
      res.status(404);
      throw new Error(`Operation ${req.params.id} not found`);
    }

    res.json(targetOperation);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const targetOperation = await Operation.findByIdAndRemove(req.params.id);

    if (!targetOperation) {
      res.status(404);
      throw new Error(`Operation ${req.params.id} not found`);
    }

    res.json({
      message: `Operation ${req.params.id} deleted`,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
