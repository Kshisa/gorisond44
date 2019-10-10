const yaml = require('js-yaml');
const fs   = require('fs');
var Client = require('node-rest-client').Client;
var client = new Client();

module.exports = foto = () => {
  let ft = yaml.safeLoad(fs.readFileSync('base/00', 'utf8'));
  let sd = 0;
  let ln = ft.length;
  let ur = sd[0];
  if (ur === (ln - 10)) {
    doc = [[0, ft[0][0][0]], [1, ft[1][0][0]],
           [2, ft[2][0][0]], [3, ft[3][0][0]],
           [4, ft[4][0][0]]];
    sd[0] = sd[0] + 5;
  }
  else if (ur === (ln - 5)) {
    doc = [[5, ft[5][0][0]], [6, ft[6][0][0]],
           [7, ft[7][0][0]], [8, ft[8][0][0]],
           [9, ft[9][0][0]]];
    sd[0] = 0;
  }
  else {
    doc = [[ur + 10, ft[ur + 10][0][0]], [ur + 11, ft[ur + 11][0][0]],
           [ur + 12, ft[ur + 12][0][0]], [ur + 13, ft[ur + 13][0][0]],
           [ur + 14, ft[ur + 14][0][0]]];
    sd[0] = sd[0] + 5;
  }
  var args = {
    data: { user: sd },
    headers: { "Content-Type": "application/json" }
  }
  client.put("http://kshisa.ru/rest/thing", args)

  return doc
}
