var fs = require('fs');
var handlebars = require('express-handlebars');
var express = require('express');
var app = express();
var mysql = require('mysql');
var myConnection = require("express-myconnection");
var bodyParser = require('body-parser');
var session = require("express-session");
var bcrypt=require("bcrypt");
var flash=require('express-flash');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(express.static("public"));



var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("app listening at http://%s:%s", host, port);
});


app.engine("handlebars", handlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: false
// }));

// app.use(function(req,res,next){
//   var isAdmin = req.session.admin && req.session.username,
//       isUser = !req.session.admin && req.session.username,
//       userInSession = req.session.username,
//       pathIsLogin = req.path === "/login",
//       pathIsSignUp = req.path === "/signup";
//
// // console.log("LOOPING THROUGH FOR THE %d TIME", ++track);
// console.log("IS ADMIN", isAdmin);
// console.log("IS USER", isUser);
// console.log("USER IN SESSION", userInSession);
// console.log("PATH IS LOGIN", pathIsLogin);
// console.log("PATH IS SIGN UP", pathIsSignUp);
// console.log("THIS IS REQ.PATH", req.path);
// console.log("THIS IS REQ.PATH.SPLIT", req.path.split("/")[1]);
//
//   var generalPath = req.path.split("/")[1] === "login"
//               || req.path.split("/")[1] === "logout"
//               || req.path.split("/")[1] === "signup"
//               || req.path.split("/")[1] === "products"
//               || req.path.split("/")[1] === "categories"
//               || req.path.split("/")[1] === "index"
//               || req.path === "/";
//
//
//   var adminPath = req.path.split("/")[1] === "products"
//                || req.path.split("/")[1] === "categories"
//                || req.path.split("/")[1] === "sales"
//                || req.path.split("/")[1] === "purchases"
//                || req.path.split("/")[1] === "users";
//
//   if (!userInSession && req.path==="/") {
//     console.log("USER NOT SIGNED UP OR LOGGED IN REDIRECTING TO SIGNUP/LOGIN");
//       res.redirect("/login");
//   } else if (!userInSession && (pathIsLogin || pathIsSignUp)) {
//     next();
//   }
//   else if (isUser && generalPath) {
//     console.log("IS USER AND GENERAL PATH MOVING ON TO NEXT MIDDLEWARE");
//     next();
//   } else if (isUser && adminPath) {
//     console.log("IS USER BUT ATTEMPTING TO GO TO ADMIN PATH REDIRECTING PATH TO '/'");
//     res.redirect("/");
//   } else if (isAdmin && (adminPath || generalPath)) {
//     console.log("IS ADMIN AND PATH IS ADMIN OR GENERAL. MOVING ON TO NEXT MIDDLEWARE");
//     next();
//   }
//
// });

// app.get("/signup", function(req, res, next){
//   console.log("DIRECTED TO SIGNUP ROUTE");
//   req.getConnection(function(err, connection){
//     // connection = mysql.createConnection(dbOptions);
//     if(err) return next(err);
//     console.log("RENDERING SIGNUP PAGE");
//     res.render("signup");
//   });
// });

// app.post('/signup', signup);
//
// app.get("/login", function(req, res, next){
//   console.log("DIRECTED TO LOG IN ROUTE");
//   req.getConnection(function(err, connection){
//     // connection = mysql.createConnection(dbOptions);
//     if(err) return next(err);
//     console.log("RENDERING LOG IN PAGE ");
//     res.render("login");
//   });
// });
// app.post('/login', login);
//
// app.get('/logout', function(req, res) {
//     delete req.session.username;
//     delete req.session.admin;
//     res.redirect('/login');
// });


app.get("/", function(req, res) {
  res.render("index");
});

app.get("/aboutus", function(req, res) {
  res.render("AboutUs");
});

app.get("/aboutusindividuals", function(req, res) {
  res.render("AboutUsIndividuals");
});

app.get("/adoptions", function(req, res) {
  res.render("adoptions");
});

app.get("/donations", function(req, res) {
  res.render("donations");
});

app.get("/events", function(req, res) {
  res.render("events");
});

app.get("/lostandfound", function(req, res) {
  res.render("lostAndFound");
});

app.get("/GivenGain", function(req, res) {
  res.render("GivenGain");
});

app.get("/contactus", function(req, res) {
  res.render("contactUs");
});
