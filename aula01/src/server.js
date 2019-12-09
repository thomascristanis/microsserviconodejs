const Koa = require('koa');
const routes = require('./lib/routes');
const connectToDb = require('./lib/connect-db');

const app = new Koa();

// Parametros de conexão com o banco
connectToDb( {
  host: '127.0.0.1',
  port: 27017,
  database: 'task'
});

const PORT = 8080;

// Carrega as rotas
app.use(routes());

// Inicia o servidor Web
const server = app.listen(8080, () => {
  console.log(`Listening on 8080`);
});