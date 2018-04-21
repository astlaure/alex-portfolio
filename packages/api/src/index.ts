require('dotenv').config();
import express from 'express';
import helmet from 'helmet';

import ProjectsRouter from './projects/projects.router';

let app = express();

app.use(helmet());
app.use(ProjectsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}.`);
})
