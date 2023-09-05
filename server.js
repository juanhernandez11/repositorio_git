const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('¡Servidor Express funcionando en el puerto ' + port + '!');
  });
  
  app.listen(port, () => {
    console.log('Servidor en funcionamiento en http://localhost:' + port);
  });
  