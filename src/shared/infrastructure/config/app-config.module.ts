import { Module } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';
import appConfig from './app.config';

const options: ConfigModuleOptions = {
	load: [appConfig],
	validationSchema: Joi.object({
		NODE_ENV: Joi.string()
			.valid('development', 'production', 'test')
			.default('development'),
		PORT: Joi.number().default(3000),
	}),
};

@Module({
	imports: [ConfigModule.forRoot(options)],
})
export class AppConfigModule {}
