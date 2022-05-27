const efis = require('./efis');

exports.groups = [
    require('./fcu'),
    require('./overhead'),
    require('./misc'),
    require('./pedestal'),
    efis(1),
    efis(2),
]