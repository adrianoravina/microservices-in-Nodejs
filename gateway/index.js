import express from 'express';
import cors from 'cors';
import proxy from 'express-http-proxy';
import logger from './logs/logging.js'

const app = express();

app.use(cors())
app.use(express.json())

app.use(logger)

app.use('/shopping', proxy('http://localhost:8002'))
app.use('/', proxy('http://localhost:8001')) // products


app.listen(8000, () => {
    console.log('Gateway is Listening to Port 8000')
}) 