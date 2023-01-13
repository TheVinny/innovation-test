import { createConnection } from 'typeorm';

export default createConnection('default')
  .then(res => {
    console.log('Connected!');
  })
  .catch(err => {
    console.error(err);
  });
