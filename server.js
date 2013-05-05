var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {

  var senseis = [
    {
      name: {
        first: 'Stephanie',
        last: 'Hua'
      },
      expertise: {
        skills: 'Chef'
      },
      location: {
        city: 'San Francisco',
        state: 'CA'
      },
      image: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaI-KeK5qG78xhPj1Zul_mefY-v65bzjBaAgOHuum4qYcgBLb' 
      }
    },
    {
      name: {
        first: 'David',
        last: 'Hua'
      },
      expertise: {
        skills: 'Photographer'
      },
      location: {
        city: 'San Francisco',
        state: 'CA'
      },
      image: {
        url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeGoO8HTpQlgVlrxXKazwe4HkPndtx7rpp_l3c6KzCgPzdilm8tQ'
      }
    },
  ];

  // this is like a traffic cop.  telling ppl where 2 go.
  res.render('index', {
    senseis: senseis
  }); // {} = locals (variables)

});


// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.


// whenever a .html file gets loaded --
// think of it as an EJS file and bring/render the view
// the view is just the  variables implemented with HTML
// so the dynamic stuff gets rendered
app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

app.listen(3000);
