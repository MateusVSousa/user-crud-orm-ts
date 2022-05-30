"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listUserController = (req, res) => {
    try {
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).send({ error: err.name, message: err.message });
        }
    }
};
