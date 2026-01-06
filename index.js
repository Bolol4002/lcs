import express from 'express';
import { house_robber_endpoint } from './util.js';

const app = express();

app.get('/', (req, res) => {
    res.send('DP - house robber problem - maximum loot he can get');
});
app.get('/rob', house_robber_endpoint);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
