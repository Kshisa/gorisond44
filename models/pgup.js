const yaml = require('js-yaml');
const fs   = require('fs');
var Client = require('node-rest-client').Client;
var client = new Client();
let sd, doc

module.exports = foto = (req) => {
  sd = Number(req.query.hide)
  console.log(sd)
  let ft = yaml.safeLoad(fs.readFileSync('../Base/00', 'utf8'));
  let ln = ft.length;
  let ur = sd
  if (ur === (ln - 10)) {
    sd = sd + 5
    doc = [[sd],
           [[0, ft[0][0][0]],
            [1, ft[1][0][0]],
            [2, ft[2][0][0]],
            [3, ft[3][0][0]],
            [4, ft[4][0][0]]]
          ]
  }
  else if (ur === (ln - 5)) {
    sd = 0
    doc = [[sd],
           [[5, ft[5][0][0]],
            [6, ft[6][0][0]],
            [7, ft[7][0][0]],
            [8, ft[8][0][0]],
            [9, ft[9][0][0]]]
          ]    
  }
  else {
    sd = sd + 5
    doc = [[sd],
           [[ur + 10, ft[ur + 10][0][0]],
            [ur + 11, ft[ur + 11][0][0]],
            [ur + 12, ft[ur + 12][0][0]],
            [ur + 13, ft[ur + 13][0][0]],
            [ur + 14, ft[ur + 14][0][0]]]
          ]
  }
  console.log(doc)
  var args = {
    data: { user: sd },
    headers: { "Content-Type": "application/json" }
  }
  client.put("http://kshisa.ru/rest/thing", args, function (data, response) {})
  return doc 
}
 

