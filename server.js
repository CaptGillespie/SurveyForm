const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true})); //find in platform for session use
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.get('/', (request, response) => {
    response.render("index");
 });
app.post('/render', (request, response) => {
    request.session.results = req.body;   //session jargon
   response.redirect("result");
});
app.get('/result', (request, response) => {
    response.render("results", {formresults: req.session.results});
 });
 


app.listen(8000, () => console.log("listening on port 8000"));
