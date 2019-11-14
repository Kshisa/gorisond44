const yaml = require('js-yaml');
const fs   = require('fs');
var Client = require('node-rest-client').Client;
var client = new Client();
let sd, doc, ur
let ft = yaml.safeLoad(fs.readFileSync('../Base/00', 'utf8'));
let ln = ft.length;

client.get("http://kshisa.ru/rest/thing", function (data, response) {
  // parsed response body as js object
  console.log(data)
  sd = Number(data.user)
  console.log(sd)
  ur = sd
  if (ur === 0) {
      doc = [[sd],
             [[0,    ft[0][0][0]], 
              [1,    ft[1][0][0]], 
              [2,    ft[2][0][0]], 
              [3,    ft[3][0][0]], 
              [4,    ft[4][0][0]],
              [5,    ft[5][0][0]], 
              [6,    ft[6][0][0]], 
              [7,    ft[7][0][0]], 
              [8,    ft[8][0][0]], 
              [9,    ft[9][0][0]],
              [ln-5, ft[ln-5][0][0]], 
              [ln-4, ft[ln-4][0][0]],
              [ln-3, ft[ln-3][0][0]], 
              [ln-2, ft[ln-2][0][0]], 
              [ln-1, ft[ln-1][0][0]]]
            ]
    }
    else if (ur === ln-5) {
      doc = [[sd],
             [[ln-5, ft[ln-5][0][0]], 
              [ln-4, ft[ln-4][0][0]],
              [ln-3, ft[ln-3][0][0]], 
              [ln-2, ft[ln-2][0][0]], 
              [ln-1, ft[ln-1][0][0]],
              [0, ft[0][0][0]], 
              [1, ft[1][0][0]],
              [2, ft[2][0][0]], 
              [3, ft[3][0][0]],
              [4, ft[4][0][0]],
              [ln-10, ft[ln-10][0][0]], 
              [ln-9,  ft[ln-9][0][0]],
              [ln-8,  ft[ln-8][0][0]],
              [ln-7,  ft[ln-7][0][0]],
              [ln-6, ft[ln-6][0][0]]]
            ]
    }
    else {
      doc = [[sd],
             [[ur,  ft[ur  ][0][0]], 
              [ur+1, ft[ur+1][0][0]], 
              [ur+2, ft[ur+2][0][0]], 
              [ur+3, ft[ur+3][0][0]], 
              [ur+4, ft[ur+4][0][0]],
              [ur+5, ft[ur+5][0][0]], 
              [ur+6, ft[ur+6][0][0]], 
              [ur+7, ft[ur+7][0][0]], 
              [ur+8, ft[ur+8][0][0]], 
              [ur+9, ft[ur+9][0][0]],
              [ur-5, ft[ur-5][0][0]], 
              [ur-4, ft[ur-4][0][0]], 
              [ur-3, ft[ur-3][0][0]], 
              [ur-2, ft[ur-2][0][0]], 
              [ur-1, ft[ur-1][0][0]]]
            ]
    }
    console.log(doc) 
})
module.exports = foto = () => {
  return doc
}
