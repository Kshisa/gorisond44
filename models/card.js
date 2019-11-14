const yaml = require('js-yaml');
const fs   = require('fs');
var Client = require('node-rest-client').Client;
var client = new Client();

let sd
client.get("http://kshisa.ru/rest/thing", function (data, response) {
  // parsed response body as js object
  console.log(data)
  sd = Number(data.user)
  console.log(sd)
})
module.exports = foto = (req) => {
  let ft = yaml.safeLoad(fs.readFileSync('../Base/00', 'utf8'));
  var numb = Number(req.query.numb || sd)
  let x = 0
  let y = []
  ft[numb][6].forEach(function(el){
    y[x] = ' genre: ' + el
    console.log(y[x])
    ++x
  })
  return [[ft[numb][0][0]],[ft[numb][1][0]], [ft[numb][1][1]], [ft[numb][2][0]/10], [ft[numb][3][0]],
  [ft[numb][4][0]],[ft[numb][5]],[y],[ft[numb][7]],[ft[numb][8]]]
}
