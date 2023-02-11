"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorToClient = void 0;
function sendErrorToClient(res, message) {
    res.status(404).send({
        error: message,
    });
}
exports.sendErrorToClient = sendErrorToClient;
