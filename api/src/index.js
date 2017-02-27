import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.options('*', cors())

for (let name in routes) {
  let [verb, path] = name.split(' ')
  verb = verb.toLowerCase()
  app[verb](path, (req, res, next) => {
    res.send(routes[name])
  })
}

export default app
