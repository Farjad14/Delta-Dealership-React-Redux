/**
 * Quick and dirty server for mock static
 *
 * Runs on port env.PORT+2 or 3002
 */

import express from 'express';
import morgan from 'morgan';
import onExit from 'signal-exit';
import path from 'path';

const app = express();
app.use(morgan('dev'));

app.use(
  '/',
  express.static(path.resolve(__dirname, '../src/mock/static/assets')),
);

app.use((req, res) => res.status(404).send('Not found!'));

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const server = app.listen(Number(process.env.PORT) + 2 || 3002, () => {
  console.log(
    `Mock static server is listening on port ${server.address().port}`,
  );
});

// gracefully shutdown the server
onExit(code => {
  console.log(`Mock static process exiting with code ${code}`);
  server.close();
});
