import knexConn from "../persistence/knex.js";


class DefaultUseCase {
    static async execute(req) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await knexConn(req.body.table_name).select("*"));
            } catch (error) {
                reject(error);
            }

        });
    }
}

export default DefaultUseCase;