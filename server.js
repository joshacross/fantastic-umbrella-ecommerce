const express = require('express');
// const { sequelize } = require('./models/Category');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
const path = require('path');
// const exphbs = require('express-handlebars');
// hbs = exphbs.create({});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'canyouguessmysecret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

//front-end static pages
// app.use(express.static(path.join(__dirname, 'public')));
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
