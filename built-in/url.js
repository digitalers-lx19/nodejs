const url = require('node:url');
const parseUrl = (uri) => uri ? 
    url.parse(uri) : 
    "no se cargo URL";
module.exports = parseUrl;