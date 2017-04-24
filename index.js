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

class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const arrEmp = [
    new Employee('Khoa', 30),
    new Employee('Phat', 29),
    new Employee('Tien', 25)
];

app.get('/loop', (req, res) => {
    res.render('nhanvien', { mang: arrEmp });
});
