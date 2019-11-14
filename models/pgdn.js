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
  if (ur === 0) {
    sd = ln - 5
    doc = [[sd],
           [[ln - 10, ft[ln - 10][0][0]], 
            [ln - 9,  ft[ln -  9][0][0]],
            [ln - 8,  ft[ln -  8][0][0]], 
            [ln - 7,  ft[ln -  7][0][0]],
            [ln - 6,  ft[ln -  6][0][0]]]
          ]
  }
  else if (ur === 5) {
    sd = 0
    doc = [[sd],
           [[ln - 5, ft[ln - 5][0][0]], 
            [ln - 4, ft[ln - 4][0][0]],
            [ln - 3, ft[ln - 3][0][0]],
            [ln - 2, ft[ln - 2][0][0]],
            [ln - 1, ft[ln - 1][0][0]]]
          ]
  }
  else {
    sd = sd - 5
    doc = [[sd],
           [[ur - 10, ft[ur - 10][0][0]],
            [ur -  9, ft[ur -  9][0][0]],
            [ur -  8, ft[ur -  8][0][0]],  
            [ur -  7, ft[ur -  7][0][0]],
            [ur -  6, ft[ur -  6][0][0]]]
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
