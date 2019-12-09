const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = async (dbOptions = {}) => {
  const {
    host = 'localhost',
    port = '27017',
    database = 'task'
  } = dbOptions;

  const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  };

  const uri = `mongodb://${host}:${port}/${database}`;

  try {
    await mongoose.connect(uri, options);
    console.log('Conectado ao Banco de Dados');
  } catch (err) {
    console.error('Conexão com o banco de dados falhou: ', String(err));
  }
};