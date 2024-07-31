import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/api/v1/users', (req, res) => {
    res.status(200).json({'status': 200, 'msg':'All users.'});
});

app.post('/api/v1/createuser', (req, res) => {
    res.status(200).json({'status': 200, 'msg':'Created successfully.'});
});

export { app };