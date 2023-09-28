export default {
    migrationsTableName: 'migrations',
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Laid22052002",
    database: "websitedb",
    entities: ["dist/**/entities/*{.ts,.js}"],
    migrations: ["dist/**/migrations/*{.ts,.js}", "dist/**/seeds/*{.ts,.js}"],
    seeds: [],
    synchronize: true,
}
