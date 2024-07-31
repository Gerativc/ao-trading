import dotenv from 'dotenv';
import {app} from './app.js';
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Port ${process.env.PORT} is running.`);
});