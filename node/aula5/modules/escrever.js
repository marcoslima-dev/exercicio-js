const fs = require ('fs').promises;
const path =  require('path');
const caminhoArquivo = path.resolve(__dirname, '..',  'test.txt');

fs.writeFile(caminhoArquivo, 'Nascido e criado na cidade meteóro\n', { flag: 'a' } );

ULSLC-GC9GH-C4XSR-JEFT4

