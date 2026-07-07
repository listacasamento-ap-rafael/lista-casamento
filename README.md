# Lista de Presentes de Casamento de Ana Paula e Rafael

Este repositório contém um projeto Angular que exibe uma lista de presentes a partir de `assets/gifts.json`, abre o Google Form prefill para reservas e consome um Apps Script para ler e confirmar reservas.

## Estrutura principal
- `src/assets/gifts.json` — lista de presentes.
- `src/environments/environment.ts` — configure Form ID, entry IDs, Apps Script URL e token.
- `src/app/components` — componentes `gift-list`, `gift-item`, `admin-confirm`.
- `src/app/services/reservation.service.ts` — serviço para GET/POST no Apps Script.

## Passo 1 Criar o projeto Angular
Se ainda não tem o projeto:
```bash
npm install -g @angular/cli
ng new lista-casamento --routing=false --style=scss
cd lista-casamento
```

## Passo 2 executar o projeto
```bash
npm start
```
Endereço local -> localhost:4200

## Passo 3 antes do deploy/commit para o github pages
```bash
npm build-gh   
```
