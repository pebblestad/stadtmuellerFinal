var express = require('express');
	 	var fetch = require('node-fetch');
        var app = express();
	 	var port = process.env.PORT || 3000;
	 	app.set('view engine', 'ejs');
	 	app.use(express.static(__dirname + '/public'));
	 	
	 	app.listen(port, function () {
    });

app.get('/', function(req, res) {
	
	let url = "https://csuserversidewebdevfinal.herokuapp.com";
    let img;
    let date;
    let explanation;
    let title;

	nodeFetch(url)
	.then(resp => resp.json())
	.then(data => {
        title = data.title;
        img = data.url;
        explanation = data.explanation;
        date = data.date;

		res.render('index', {img:img});
	})
	.catch{err => {
		console.log(err);
		res.render('index');
    });
});

var getData;
