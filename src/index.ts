import bodyParser from 'body-parser';
import express from 'express';
import mustacheExpress from 'mustache-express';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', `${__dirname}/views`);

// parse application/json
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.render('index');

});

app.listen(8000);

// const sleep =
