const fcu = require('./fcu')
const overhead = require('./overhead')
const misc = require('./misc')
const pedestal = require('./pedestal')

exports.groups = [
    fcu,
    overhead,
    misc,
    pedestal,
]