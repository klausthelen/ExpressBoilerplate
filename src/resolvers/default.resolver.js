import {StatusCodes} from "http-status-codes";
import DefaultUseCase from "../use-cases/default.use-case.js";

export const insertResolver = async (req, res) => {
    try {
        const value = await DefaultUseCase.insert(req);
        res.status(StatusCodes.OK).json(value);
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
}

export const getResolver = async (req, res) => {
    try {
        const value = await DefaultUseCase.get(req);
        res.status(StatusCodes.OK).json(value);
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
}

export const rawResolver = async (req, res) => {
    try {
        const value = await DefaultUseCase.rawFunc(req);
        res.status(StatusCodes.OK).json(value);
    } catch (error) {
        res.status(StatusCodes.EXPECTATION_FAILED).json(error);
    }
}