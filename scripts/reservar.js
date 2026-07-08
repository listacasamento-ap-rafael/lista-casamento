const fs = require("fs");

const id = Number(process.argv[2]);

const file = "src/assets/presentes.json";

const data = JSON.parse(
  fs.readFileSync(file, "utf8")
);


const presente = data.find(
  item => item.id === id
);


if (!presente) {
  console.error("Presente não encontrado");
  process.exit(1);
}


if (presente.reserved >= presente.total) {

  console.error(
    "Presente já reservado"
  );

  process.exit(1);

}


presente.reserved++;


fs.writeFileSync(
  file,
  JSON.stringify(data, null, 2),
  "utf8"
);


console.log(
  `Presente ${id} reservado`
);