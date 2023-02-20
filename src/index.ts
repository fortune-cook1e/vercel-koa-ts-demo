import { v4 } from 'uuid'
import Koa from 'koa'
import Router from '@koa/router'

const koa = new Koa()

const router = new Router()

router.get('/api', ctx => {
  ctx.body = '123'
})

koa.use(router.routes()).use(router.allowedMethods())

export default koa
