"use strict";
exports.__esModule = true;
exports.pgMasterPoolConfig = exports.pgMasterAdminPoolConfig = void 0;
var fs_1 = require("fs");
var _a = process.env, PG_MASTER_ADMIN_USERNAME = _a.PG_MASTER_ADMIN_USERNAME, PG_MASTER_ADMIN_PASSWORD = _a.PG_MASTER_ADMIN_PASSWORD, PG_MASTER_USERNAME = _a.PG_MASTER_USERNAME, PG_MASTER_PASSWORD = _a.PG_MASTER_PASSWORD, PG_MASTER_HOST = _a.PG_MASTER_HOST, PG_MASTER_PORT = _a.PG_MASTER_PORT, PG_MASTER_NAME = _a.PG_MASTER_NAME, PG_MASTER_CA_LOCATION = _a.PG_MASTER_CA_LOCATION;
exports.pgMasterAdminPoolConfig = {
    user: PG_MASTER_ADMIN_USERNAME,
    password: PG_MASTER_ADMIN_PASSWORD,
    host: PG_MASTER_HOST,
    port: parseInt(PG_MASTER_PORT),
    database: PG_MASTER_NAME,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 10000,
    max: 10,
    ssl: {
        rejectUnauthorized: true,
        ca: fs_1["default"].readFileSync(PG_MASTER_CA_LOCATION)
    }
};
exports.pgMasterPoolConfig = {
    user: PG_MASTER_USERNAME,
    password: PG_MASTER_PASSWORD,
    host: PG_MASTER_HOST,
    port: parseInt(PG_MASTER_PORT),
    database: PG_MASTER_NAME,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 10000,
    max: 10,
    ssl: {
        rejectUnauthorized: true,
        ca: fs_1["default"].readFileSync(PG_MASTER_CA_LOCATION)
    }
};
