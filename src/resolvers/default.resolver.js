import {StatusCodes} from "http-status-codes";
import DefaultUseCase from "../use-cases/default.use-case.js";

const bdState = async (req, res) => {
    try {
        const value = await DefaultUseCase.execute(req);
        res.status(StatusCodes.OK).json(value);
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
}


export default bdState;