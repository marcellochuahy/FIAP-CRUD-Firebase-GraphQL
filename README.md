Desenvolvimento de CRUD utilizando Firebase e GraphQL
Marcello Kantovitz Chuahy

firebase login
Allow Firebase to collect CLI usage and error reporting information? Yes
firebase serve
✔ functions[graphql]: http function initialized (http://localhost:5000/crudwithgraphqlmarcellochuahy/us-central1/graphql).

Exemplos de consultas / mutações:

```
{
  produto {
    nomeproduto
    preco
  }
}
```

```
mutation {
  inserir(
    id: 4
    nomeproduto: "iMac"
    descricao: "27 polegadas"
    fornecedor: "Apple"
    preco: 200000.00
    datacadastro: "22/12/2020"
  ) {
    nomeproduto
    preco
  }
}
```

```
mutation {
  atualizar(
    id: 4
    nomeproduto: "iMac"
    descricao: "27 polegadas"
    fornecedor: "Apple"
    preco: 100000.00
    datacadastro: "22/12/2020"
  ) {
    nomeproduto
    preco
  }
}
```

```
mutation {
  excluir(id: 5) {
    nomeproduto
    id
  }
}
```

Para parar a execução:

control C
firefase logout
