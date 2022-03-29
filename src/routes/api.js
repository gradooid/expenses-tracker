import express from 'express';

import operationsRouter from './operationsRouter.js';

const router = express.Router();

router.use('/operations', operationsRouter);

export default router;
