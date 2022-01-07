import axios from 'axios';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

const express = require('express');
const app = express();
var PORT = 8000;

app.use(express.json());

const db = new JsonDB(new Config('myDataBase', true, true, '/'));

app.get('/token', async function (req, res) {
    const shopConfig = { id: 'dpd', shopUrl: 'https://dpd.myshoptet.com' }; // I dont know how to get this from api
    const code = req.query.code;
    console.log(req.headers);
    try {
        db.push(`/shops/${shopConfig.id}`, { code, shopUrl: shopConfig.shopUrl });
        // const token = await axios.get(`${shopConfig.shopUrl}/action/ApiOAuthServer/getAccessToken`, {
        const token = await axios.get(`https://dpd.myshoptet.com/action/ApiOAuthServer/getAccessToken`, {
            headers: { Authorization: `Bearer ${code}` },
            // data: {},
        });

        console.log('token: ', token);

        const expiration = new Date();
        expiration.setMinutes(expiration.getMinutes() + 25);

        db.push(`/shops/${shopConfig.id}`, { code, shopUrl: shopConfig.shopUrl, authorization: { token, expiration } });

        res.json({});
    } catch (err) {
        console.log(Object.keys(err));
        console.log(err);
        res.status(500).json({ error: err });
    }
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log('Server listening on PORT', PORT);
});
