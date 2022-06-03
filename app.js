const ejs = require('ejs')
const fs = require('fs')
const { groups } = require('./groups/index')

groups.forEach((group) => {
    group.scripts.forEach((script) => {
        script.varName = script.varName instanceof Array ? script.varName : [ script.varName ]
    })
})

ejs.renderFile('./output/xml.ejs', { groups }, {}, function (error, string) {
    if (error) {
        console.error(error)
    }

    fs.writeFile('.build/fnx320_scripts.xml', string, error => {
        if (error) {
            console.error(error)
        }
    })
})
