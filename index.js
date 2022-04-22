const app = require('./app')
const keys = require('./config/keys')

app.listen(keys.port, () =>
  console.log(`Server has been started on port ${keys.port}`)
)
