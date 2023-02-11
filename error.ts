function sendErrorToClient(res, message) {
  res.status(404).send({
    error: message,
  });
}

export { sendErrorToClient };
