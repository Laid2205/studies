import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions, Entity } from "typeorm";
import  config  from './typeorm.config';

dotenvConfig({ path: '.env' });


export default new DataSource(config as any)