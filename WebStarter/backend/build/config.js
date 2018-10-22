"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dbFilePath = process.env.NODE_ENV == "production" ? "/.app/data.db" : "data.db";

exports.default = dbFilePath;