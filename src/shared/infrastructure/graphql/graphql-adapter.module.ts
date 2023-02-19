import {
	ApolloFederationDriver,
	ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Logger, Module } from '@nestjs/common';
import { GraphQLModule, registerEnumType } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';

const isDev: boolean = process.env.NODE_ENV === 'development';

const logger: Logger = new Logger('GqlAdapterModule');

const plugins = [];

if (isDev) {
	plugins.push(ApolloServerPluginLandingPageLocalDefault());
}

const options: ApolloFederationDriverConfig = {
	driver: ApolloFederationDriver,
	autoSchemaFile: join(__dirname, '../../../schema.gql'),
	// TODO: Pending Error Filter
	context: ({ req, res }) => ({ req, res }),
	logger: {
		debug: logger.debug.bind(logger),
		info: logger.log.bind(logger),
		warn: logger.warn.bind(logger),
		error: logger.error.bind(logger),
	},
	sortSchema: true,
	debug: isDev,
	playground: false,
	plugins,
	buildSchemaOptions: {
		dateScalarMode: 'isoDate',
	},
	formatError: (error: GraphQLError) => {
		const graphQLFormattedError: GraphQLFormattedError = {
			message: error.message,
			extensions: {
				code: error.extensions?.code,
				info: error.extensions?.info,
			},
		};
		return graphQLFormattedError;
	},
};

const GQL_ENUMS: Array<[object, string]> = [];

for (const gqlEnum of GQL_ENUMS) {
	registerEnumType(gqlEnum[0], { name: gqlEnum[1] });
}

@Module({
	imports: [GraphQLModule.forRoot<ApolloFederationDriverConfig>(options)],
})
export class GraphqlAdapterModule {}
