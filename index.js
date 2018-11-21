const fs = require('fs');
const cheerio = require('cheerio');
const jsonexport = require('jsonexport');


const textlines = []
fs.readFile('./test.svg', 'utf-8', (err, bod)=>{
	const $ = cheerio.load(bod);

	$('text').each((i, obj)=>{
		textlines[i] = {'something':$(obj).text()};
	})

	console.log(textlines)
	jsonexport(textlines,function(err, csv){
	    if(err) return console.log(err);
	    fs.writeFileSync('./output.csv', csv)
	});

})