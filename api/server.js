import { createServer } from 'http'
import app from './src'

const server = createServer(app)

app.set('host', process.env.HOST || '0.0.0.0')
app.set('port', process.env.PORT || 3000)

server.listen(app.get('port'), app.get('host'), () => {
  console.log('Express listening on port: ' + app.get('port'))
})
