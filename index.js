const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const port = 8000;

app.get('/produtos', (req, res) => {

    const items = ["Arroz - R$10,00", "Feijão - R$20,00", "Macarrão - R$15,00"];
    res.render('produtos', { items });
});

app.get('/promocao', (req, res) => {
    const promocao = {
        title: "Promoção",
        category: "Batata",
        body: "1k de batata por apenas R$2,00!",
    };
    res.render('promocao', { promocao });
});

app.get('/batata', (req, res) => {

    const bats = [
        {
            title: "Batata Premium",
            category: "Super cuidada e regada",
            body: "A nossa batata é a melhor do mundo!",
        }
    ];
    res.render('batata', { bats })
});

app.get('/maca', (req, res) => {

    const macs = [
        {
            title: "Maçã Premium",
            category: "Super cuidada e regada",
            body: "A nossa maçã é a melhor do mundo!",
        }
    ];
    res.render('maca', { macs });
});

app.get('/feirinha', (req, res) => {
    const posts = [
        {
            title: "Feirinha da semana",
            category: "Saco de Verduras",
            body: "Apenas R$5,00"
        },
        {
            title: "Feirinha da semana",
            category: "Saco de Legumes",
            body: "Apenas R$6,00"
        },
        {
            title: "Feirinha da semana",
            category: "Saco de Frutas",
            body: "Apenas R$7,00"
        },
    ];
    res.render('feirinha', { posts });
});

app.get('/', (req, res) => {

    const user = {
        name: 'Carlos',
        age: 19
    };

    res.render('home', { user });
});

app.listen(port, () => console.log(`Running on port ${port}!`));