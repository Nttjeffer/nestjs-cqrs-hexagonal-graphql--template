import { VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);
	const port: number = configService.get('port') ?? 3000;

	app.enableVersioning({
		type: VersioningType.URI,
		prefix: 'v',
	});

	const config = new DocumentBuilder()
		.setTitle('Template service')
		.setDescription('The Template API description')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(port);
}

bootstrap().catch(console.error);
