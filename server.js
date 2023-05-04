const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: '/home/osboxes/teste_uploadbar' });


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
  });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Arquivo recebido!');
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));