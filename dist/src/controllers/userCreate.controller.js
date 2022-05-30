"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCreateController = (req, res) => {
    try {
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).send({ message: err.message, error: err.name });
        }
    }
};
exports.default = userCreateController;
