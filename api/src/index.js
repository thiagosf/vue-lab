import express from 'express'
import cors from 'cors'
import routes from './routes'
import bodyParser from 'body-parser'

const app = express()

if (process.env.NODE_ENV == 'production') {
  const port = process.env.PORT || 3000
  app.listen(port)
}

app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

for (let name in routes) {
  let [verb, path] = name.split(' ')
  verb = verb.toLowerCase()
  app[verb](path, (req, res, next) => {
    setTimeout(() => {
      res.send(Object.assign({}, routes[name], { __request: req.body || req.query }))
    }, 1000)
  })
}

app.post('/auth/login', (req, res, next) => {
  setTimeout(() => {
    if (req.body.username == 'admin' && req.body.password == '123') {
      res.send({
        success: true,
        message: "Login efetuado com sucesso! (1)",
        data: {
          id: "1",
          username: "admin",
          password: "123",
          token: "a1s2d3f4"
        }
      })
    } else {
      res.send({
        success: false,
        message: "Dados inválidos!"
      })
    }
  }, 1000)
})

export default app
