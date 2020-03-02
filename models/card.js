const yaml = require('js-yaml')
const fs   = require('fs')
var Client = require('node-rest-client').Client
var client = new Client()

let sd
client.get("http://kshisa.ru/rest/thing", function (data) {
  user = data.user
  sd = Number(user[0][0])
})
module.exports = card = (req) => {
  let numb = Number(req.query.numb || sd)
  let file = Number(req.query.file || 0)
  let ft = yaml.safeLoad(fs.readFileSync('./base/' + file, 'utf8'));
  let x = 0
  let xx = 0
  let y = []
  for (n = 7; n < 13; ++n) {
    if (ft[numb][n]){
      y.push(n)
    }
  }
  console.log(y)
  let z = []
  y.forEach(function(el){
    ft[numb][el].forEach(function(){
      if (ft[numb][el][x][3] == 'blank') {
        ++x
        return
      }
      else {
        z[xx] = [
            ft[0][el][5],
            ft[numb][el][x][3],
            ft[numb][el][x][2]
          ]
        ++x
        ++xx
      }
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
              ft[numb][2][0]/10+0.3,
              ft[numb][3][0],
              ft[numb][4][0],
              billCoun,
              billGenr,
              z,
              ft[numb][0][2],
              ft[numb][13][0]
            ]
  console.log(card)
  return card
}
