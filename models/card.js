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
  let ft = yaml.safeLoad(fs.readFileSync('./base/0', 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
  }))
  let numb = Number(req.query.numb || sd)

  let x = 0
  let xx = 0
  let y = [ 7, 8, 9, 10, 11 ]
  let z = []
  y.forEach(function(el){
    ft[numb][el].forEach(function(){
      z[xx] = [
            ft[0][el][3],
            ft[numb][el][x][3],
            ft[numb][el][x][2]
          ]
      ++x
      ++xx
    })
    x = 0
  })
  x = 0
  let billCoun = []
  let billGenr = []
  ft[numb][5].forEach(function(el){
    billCoun[x] = el[1]
    ++x
  })
  x = 0
  ft[numb][6].forEach(function(el){
    billGenr[x] = el[1]
    ++x
  })  
  let card = [ft[numb][0][0],
              ft[numb][1][0],
              ft[numb][1][1], 
              ft[numb][2][0]/10, 
              ft[numb][3][0],
              ft[numb][4][0],
              billCoun,
              billGenr,
              z,
              ft[numb][0][2]
            ]
  console.log(card)
  return card 
}
