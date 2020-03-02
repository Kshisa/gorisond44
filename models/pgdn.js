const yaml = require('js-yaml');
const fs   = require('fs');
var Client = require('node-rest-client').Client;
var client = new Client();
let sd, doc, file

module.exports = foto = (req) => {
  sd = Number(req.query.hide)
  file = Number(req.query.file)
  console.log(sd, file)
  let ft = yaml.safeLoad(fs.readFileSync('./base/' + file, 'utf8'));
  let ln = ft.length;
  if (sd === 1) {
    sd = ln - 5
    doc = [[sd],
           [[ln - 10, ft[ln - 10][0][0]], 
            [ln - 9,  ft[ln -  9][0][0]],
            [ln - 8,  ft[ln -  8][0][0]], 
            [ln - 7,  ft[ln -  7][0][0]],
            [ln - 6,  ft[ln -  6][0][0]]]
          ]
  }
  else if (sd === 6) {
    sd = 1
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
          [[sd - 5, ft[sd - 5][0][0]],
           [sd - 4, ft[sd - 4][0][0]],
           [sd - 3, ft[sd - 3][0][0]],  
           [sd - 2, ft[sd - 2][0][0]],
           [sd - 1, ft[sd - 1][0][0]]]
          ]
  }
  console.log(doc)
  var args = {
    data: { file: file,
            numb: sd
          },
    headers: { "Content-Type": "application/json" }
  }
  client.put("http://kshisa.ru/rest/thing", args, function (data, response) {})
  return doc
}
