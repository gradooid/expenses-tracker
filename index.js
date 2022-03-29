import mongoose from 'mongoose';

import app from './src/app.js';
import { log } from './src/utils/logger.js';

const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    log(error);
    process.exit(1);
  });
