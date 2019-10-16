const express = require('express');
const expressGraphQL = require('express-graphql')


const app = express();

app.use('/graphql', expressGraphQL ({
  graphiql: true
}))

app.listen(3500, () => {
  console.log('Hello Will');
})