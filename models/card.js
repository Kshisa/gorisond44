const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = foto = (req) => {
  var first = yaml.safeLoad(fs.readFileSync('../../Base/00', 'utf8'));
  var numb = Number(req.query.numb)
  return [[first[numb][1][1]], [first[numb][1][0]]]
}
