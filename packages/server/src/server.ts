import express from 'express';
import cors from 'cors'
const app = express();
const port = 9000;

app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.get('/cart/:id', (req, res) => {
    const updatedCart = {id: 'cart', entries: [{id: 'entry', name: 'entry', price: 100, quantity: 1}] }
    res.json(updatedCart);
});

app.get('/cart', (req, res) => {
    const cart = {id: 'cart', entries: [{id: 'entry', name: 'entry', price: 100, quantity: 0}] }

    res.json(cart);
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});