import knexConn from "../persistence/knex.js";


class DefaultUseCase {
    static async insert(req) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await knexConn("trial").insert({title: req.body.title}));
            } catch (error) {
                reject(error);
            }

        });
    }

    static async get(req) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await knexConn("trial").select("*"));
            } catch (error) {
                reject(error);
            }

        });
    }

    static async rawFunc(req) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log("HELLOO");
                const id = req.params.id;
                resolve(await knexConn.raw("Select * From trial WHERE id = " + id ));
            } catch (error) {
                reject(error);
            }

        });
    }
}

export default DefaultUseCase;