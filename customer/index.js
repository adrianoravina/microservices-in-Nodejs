import express from 'express';

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({"msg":"Hello from customer service!"})
});

app.listen(8001, () => {
    console.log('Customer listening on port 8002!')
})