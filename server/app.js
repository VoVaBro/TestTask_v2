const http = require ('http')
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {
    http.Server(app).listen(5000, console.log('server start on port 5000'));
    console.log('Mongo connected!')
}) 
.catch(e => console.log('MONGO ERRO: ', e));



app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);



app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});


