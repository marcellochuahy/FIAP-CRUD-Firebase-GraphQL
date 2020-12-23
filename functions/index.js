const express             = require("express")
const {ApolloServer, gql} = require("apollo-server-express")
const functions           = require('firebase-functions');
const admin               = require('firebase-admin');
const resolvers           = require("./resolvers");
const { importSchema }    = require("graphql-import");
const serviceAccount      = require('./config/firebase-private-key.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://crudwithgraphqlmarcellochuahy-default-rtdb.firebaseio.com/"
  });  

const app = express()

const server = new ApolloServer({
    typeDefs: importSchema("./schema/index.graphql"),
    resolvers: resolvers,
})

server.applyMiddleware({
    app,
    path: "/", 
    cors: true
})

exports.graphql = functions.https.onRequest(app)