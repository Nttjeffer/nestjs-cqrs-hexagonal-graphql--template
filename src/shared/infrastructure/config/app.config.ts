export default () => ({
	environment: process.env.NODE_ENV ?? 'development',
	database: {
		host: process.env.DATABASE_HOST,
		port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
	},
	port: parseInt(process.env.PORT ?? '3000', 10),
});
