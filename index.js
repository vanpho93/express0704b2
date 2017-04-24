const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.send('Hello'));

app.get('/show', (req, res) => res.render('home', { name: 'KHoa PHAm' }));

app.get('/admin', (req, res) => {
    res.render('admin', { isAdmin: true });
});
