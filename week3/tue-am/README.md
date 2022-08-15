Create a configuration file

```
npx knex init
```

create table/migration

```
npm run knex migrate:make <table_name>
```

migrate the table
```
npm run knex migrate:latest
```

create a seed file
```
npm run knex seed:make <table_name>
```

run the seeds
```
npm run knex seed:run
```


