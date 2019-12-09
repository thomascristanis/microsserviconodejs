const koaBody = require('koa-body');
const Router = require('koa-better-router');

module.exports = () => {
  let router = Router({prefix: '/api'}).loadMethods();

  // Find one Task
  router.get('/task', async ctx => {
    console.log('Recuperando todas as tarefas');
    ctx.body = [];
  });

  // Query Tasks
  router.get('/task/:id', async ctx => {
    const id = ctx.params.id;
    console.log('Retrieving task ${id}');
    ctx.body = {};
  });

  // Create Task
  router.post('/task', koaBody(), async ctx => {
    const values = ctx.request.body;
    console.log('Criando nova tarefa com valores ${JSON.stringify(values)}');
    ctx.body = {};
  });

  // Update Task
  router.put('/task/:id', koaBody(), async ctx => {
    const id = ctx.params.id;
    const values = ctx.request.body;
    console.log('Updating task ${id} with values ${JSON.stringify(values)}');
    ctx.status = 200;
  });

  // Delete Task
  router.delete('/task/:id', async ctx => {
    const id = ctx.params.id;
    console.log('deleting task ${id}');
    ctx.status = 200;
  });

  return router.middleware();
};