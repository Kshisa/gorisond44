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
  if (sd === (ln - 10)) {
    sd = sd + 5
    doc = [[sd],
           [[1, ft[1][0][0]],
            [2, ft[2][0][0]],
            [3, ft[3][0][0]],
            [4, ft[4][0][0]],
            [5, ft[5][0][0]]]
          ]
  }
  else if (sd === (ln - 5)) {
    sd = 1
    doc = [[sd],
           [[6,  ft[6][0][0]],
            [7,  ft[7][0][0]],
            [8,  ft[8][0][0]],
            [9,  ft[9][0][0]],
            [10, ft[10][0][0]]]
          ]    
  }
  else {
    sd = sd + 5
    doc = [[sd],
           [[sd + 5, ft[sd + 5][0][0]],
            [sd + 6, ft[sd + 6][0][0]],
            [sd + 7, ft[sd + 7][0][0]],
            [sd + 8, ft[sd + 8][0][0]],
            [sd + 9, ft[sd + 9][0][0]]]
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
 

