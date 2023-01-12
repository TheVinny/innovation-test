import 'reflect-metadata';
import 'dotenv/config';
import '@shared/infra/database';
import '@shared/container';
import Server from '@shared/infra/http/Server';

new Server().start(process.env.BACKEND_PORT || 2222);
