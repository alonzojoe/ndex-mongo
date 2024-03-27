const express = require("express");
const { json, urlencoded } = express;

const formMiddleware = [json(), urlencoded({ extended: false })];

module.exports = formMiddleware;
