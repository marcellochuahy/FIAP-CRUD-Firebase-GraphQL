const admin = require("firebase-admin");

module.exports = {

    inserir(_, { id, nomeproduto, descricao, fornecedor, preco, datacadastro }) {
        
        const novo = {
        id: id,
        nomeproduto: nomeproduto,
        descricao: descricao,
        fornecedor: fornecedor,
        preco: preco,
        datacadastro: datacadastro,
        };

        admin.database().ref("produtos").push(novo);

        return admin
        .database()
        .ref("produtos")
        .limitToLast(1)
        .once("value")
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]));
    },

    excluir(_, { id }) {
        
        const ref = admin.database().ref("produtos");

        return ref
        .orderByChild("id")
        .equalTo(id)
        .once("value")
        .then((snap) => {
            return snap.val();
        })
        .then((val) => {
            if (val) {
            const firstKey = Object.keys(val)[0];
            const produtoExcluido = val[firstKey];
            ref.child(firstKey).remove();
            return produtoExcluido;
            }
        });
    },

    atualizar(_, { id, nomeproduto, descricao, fornecedor, preco, datacadastro }) {
        
        const ref = admin.database().ref("produtos");

        return ref
        .orderByChild("id")
        .equalTo(id)
        .once("value")
        .then((snap) => {
            return snap.val();
        })
        .then((val) => {
            if (val) {
            const firstKey = Object.keys(val)[0];
            let produtoAlterado = val[firstKey];
            produtoAlterado.nomeproduto = nomeproduto;
            produtoAlterado.descricao = descricao;
            produtoAlterado.fornecedor = fornecedor;
            produtoAlterado.preco = preco;
            produtoAlterado.datacadastro = datacadastro;

            console.log("produtoAlterado", produtoAlterado);

            ref.child(firstKey).set(produtoAlterado);
            return produtoAlterado;
            }
        });
    }

};