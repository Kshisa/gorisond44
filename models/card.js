const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = foto = (req) => {
  let ft = yaml.safeLoad(fs.readFileSync('base/00', 'utf8'));
  var numb = Number(req.query.numb)
  return [[ft[numb][1][1]], [ft[numb][1][0]]]
}
