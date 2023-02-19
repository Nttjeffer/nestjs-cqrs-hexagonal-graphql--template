import { Module } from '@nestjs/common';
import { AppConfigModule } from '@Shared/infrastructure/config/app-config.module';
import { GraphqlAdapterModule } from '@Shared/infrastructure/graphql/graphql-adapter.module';

@Module({
	imports: [GraphqlAdapterModule, AppConfigModule],
})
export class AppModule {}
