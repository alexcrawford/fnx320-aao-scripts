const ejs = require('ejs')
const fs = require('fs')

const { groups } = require('./groups/index')

ejs.renderFile('app.ejs', { groups }, {}, function (error, string) {
    if (error) {
        console.error(error);
    }

    fs.writeFile('fnx320_scripts.xml', string, err => {
        if (err) {
            console.error(err);
        }
    });
})