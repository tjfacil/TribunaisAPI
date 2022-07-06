# TribunaisAPI

Uma API pública com informações sobre os tribunais brasileiros.


## Endpoints

### Tribunais
```
/courts
/courts/summary
/courts/id/:id
/courts/code/:code
/courts/abbr/:abbr
```

### Comarcas
```
/regions/court/:code
```

### Serventias
```
/services
/services/summary
/services/court/:code
/services/region/:code
/services/internal/:code
/services/summary/court/:code
```

## Parâmetros
- :code - Apenas dígitos de 0 a 9. Pode significar um dos seguintes:
  - Código de 3 ou 5 digitos do Tribunal (ex: 819 = TJRJ, 813 = TJMG, 40251 = JFRJ, 40252 = JFES)
  - Código interno do Tribunal para uma Comarca ou Serventia
- :abbr - Apenas letras
  - Abreviação do nome do Tribunal (ex: TJRJ, TJMG, JFSP, STJ, STF, TRT1, TRT20)
- :id - Id interno da API.

## Paginação
Usar as querystrings `limit` e `skip` para indicar os parâmetros para paginação.
- Limit: quantidade de entradas a serem retornadas.
  - Valor mínimo 1 e máximo 100.
  - Valor default 10
- Skip: offset de início dos dados retornados.
  - Valor default 0
- Exemplos
  - /services?limit=50 (retorna 50 elementos a partir do início)
  - /services?limit=100&skip=10 (retorna 100 elementos a partir do décimo)

A ordem para o skip é determinística e irrelevante para o cliente.


## Dev

```
npm install
npm run dev
```

## Build
```
npm build
npm start
```

## Tests
```
npm test
```

## Env

```
PORT=
MONGO_URI=
MONGO_TEST_URI=
```
