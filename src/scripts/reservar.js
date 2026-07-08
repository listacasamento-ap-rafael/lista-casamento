const fs = require('fs');

const id = Number(process.argv[2]);

const arquivo = 'src/assets/presentes.json';

const presentes = JSON.parse(
    fs.readFileSync(arquivo)
);

const presente = presentes.find(p => p.id === id);

if (!presente)
    process.exit(1);

if (presente.reserved >= presente.total)
    process.exit(0);

presente.reserved++;

fs.writeFileSync(
    arquivo,
    JSON.stringify(presentes, null, 2)
);