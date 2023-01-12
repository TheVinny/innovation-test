import { createConnection } from 'typeorm';

createConnection('default')
  .then(() => {
    console.log('Connected!');
  })
  .catch(err => {
    console.error(err);
  });
