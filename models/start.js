const yaml = require('js-yaml');
const fs   = require('fs');
var Client = require('node-rest-client').Client;
var client = new Client();
let sd, doc

let ft = yaml.safeLoad(fs.readFileSync('./base/0', 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
}))

let ln = ft.length;

client.get("http://kshisa.ru/rest/thing", function (data, response, err) {
  // parsed response body as js object
  sd = Number(data.user)
  if (sd === 1) {
      doc = [[sd],
             [[1,    ft[1][0][0]], 
              [2,    ft[2][0][0]], 
              [3,    ft[3][0][0]], 
              [4,    ft[4][0][0]], 
              [5,    ft[5][0][0]],
              [6,    ft[6][0][0]], 
              [7,    ft[7][0][0]], 
              [8,    ft[8][0][0]], 
              [9,    ft[9][0][0]], 
              [10,   ft[10][0][0]],
              [ln-6, ft[ln-6][0][0]], 
              [ln-5, ft[ln-5][0][0]],
              [ln-4, ft[ln-4][0][0]], 
              [ln-3, ft[ln-3][0][0]], 
              [ln-2, ft[ln-2][0][0]]]
            ]
    }
    else if (sd === ln-5) {
      doc = [[sd],
             [[ln-5, ft[ln-5][0][0]], 
              [ln-4, ft[ln-4][0][0]],
              [ln-3, ft[ln-3][0][0]], 
              [ln-2, ft[ln-2][0][0]], 
              [ln-1, ft[ln-1][0][0]],
              [1, ft[1][0][0]], 
              [2, ft[2][0][0]],
              [3, ft[3][0][0]], 
              [4, ft[4][0][0]],
              [5, ft[5][0][0]],
              [ln-10, ft[ln-10][0][0]], 
              [ln-9,  ft[ln-9][0][0]],
              [ln-8,  ft[ln-8][0][0]],
              [ln-7,  ft[ln-7][0][0]],
              [ln-6,  ft[ln-6][0][0]]]
            ]
    }
    else {
      doc = [[sd],
             [[sd,   ft[sd  ][0][0]], 
              [sd+1, ft[sd+1][0][0]], 
              [sd+2, ft[sd+2][0][0]], 
              [sd+3, ft[sd+3][0][0]], 
              [sd+4, ft[sd+4][0][0]],
              [sd+5, ft[sd+5][0][0]], 
              [sd+6, ft[sd+6][0][0]], 
              [sd+7, ft[sd+7][0][0]], 
              [sd+8, ft[sd+8][0][0]], 
              [sd+9, ft[sd+9][0][0]],
              [sd-5, ft[sd-5][0][0]], 
              [sd-4, ft[sd-4][0][0]], 
              [sd-3, ft[sd-3][0][0]], 
              [sd-2, ft[sd-2][0][0]], 
              [sd-1, ft[sd-1][0][0]]]
            ]
    }
    console.log(doc) 
})
module.exports = foto = () => {
  return doc
}
