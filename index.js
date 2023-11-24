const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const favicon = require('serve-favicon');

dotenv.config({ path: './.env' });

const port = process.env.PORT;

const app = express();

app
  .use(express.static(path.resolve(path.join(__dirname, 'public'))))
  .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  .set('views', path.join(__dirname, 'src', 'views'))
  .set('view engine', '.ejs')
  .use('/', (_req, res) =>
    res.render('./', {
      lang: 'en',
      data: {
        title: 'Calendar',
        links: [
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
