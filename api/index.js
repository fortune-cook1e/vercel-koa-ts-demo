"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("@koa/router"));
const koa = new koa_1.default();
const router = new router_1.default();
router.get('/api', ctx => {
    ctx.body = '123';
});
koa.use(router.routes()).use(router.allowedMethods());
exports.default = koa;
