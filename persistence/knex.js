import knex from 'knex';

const knexConn = knex({
    client: 'sqlite3',
    connection: {
        filename : 'db.sqlite3'
    }
});


export default knexConn;
