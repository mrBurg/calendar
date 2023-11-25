const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const favicon = require('serve-favicon');
var bodyParser = require('body-parser');

dotenv.config({ path: './.env' });

const port = process.env.PORT;
const app = express();

let currentDate = Date.now();

app
  .use(express.static(path.resolve(path.join(__dirname, 'public'))))
  .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'src', 'views'))
  .set('view engine', '.ejs')
  .get('/api/get-date', (_req, res) => res.send(JSON.stringify(currentDate)))
  .post('/api/save-date', (req, res) => {
    currentDate = Number(req.body.date);

    res.end();
  })
  .use('/', (_req, res) =>
    res.render('./', {
      lang: 'en',
      data: {
        title: 'Calendar',
        links: [
          {
            rel: 'stylesheet',
            href: '/styles/vendors/normalize.css',
          },
          {
            rel: 'stylesheet',
            href: '/styles/vendors/jquery-ui.structure.min.css',
          },
          {
            rel: 'stylesheet',
            href: '/styles/vendors/jquery-ui.theme.min.css',
          },
          {
            rel: 'stylesheet',
            href: '/styles/vendors/jquery-ui.min.css',
          },
          {
            rel: 'stylesheet',
            href: '/styles/index.css',
          },
        ],
        scripts: [
          {
            type: 'text/javascript',
            src: '/scripts/vendors/jquery-3.7.1.min.js',
          },
          {
            type: 'text/javascript',
            src: '/scripts/vendors/jquery-ui.min.js',
          },
          {
            type: 'text/javascript',
            src: '/scripts/index.js',
          },
        ],
      },
    })
  );

app.listen(port, () =>
  console.log(
    `\x1b[93mApp listening on port\x1b[44m\x1b[30m ${port} \x1b[0m\x1b[93m!\x1b[0m`
  )
);
