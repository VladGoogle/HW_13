// TODO: create a router and bind endpoints here
import * as Router  from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
const db = require('./service.ts')


const router = new Router({ prefix: '/user' });


router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)



export default router;
