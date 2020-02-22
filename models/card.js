const yaml = require('js-yaml')
const fs   = require('fs')
var Client = require('node-rest-client').Client
var client = new Client()

let sd
client.get("http://kshisa.ru/rest/thing", function (data, response) {
  // parsed response body as js object
  console.log(data)
  sd = Number(data.user)
  console.log(sd)
})
module.exports = foto = (req) => {
  let numb = Number(req.query.numb || sd)
  let file = Number(req.query.file || 0)
  let ft
  if (file == 0) {
    ft = yaml.safeLoad(fs.readFileSync('./base/0', 'utf8', (err) => {
      if (err) {
        return console.log(err)
      }
    }))    
  }
  else if (file == 4) {
    ft = yaml.safeLoad(fs.readFileSync('./base/4', 'utf8', (err) => {
      if (err) {
        return console.log(err)
      }
    }))
  }
  let x = 0
  let xx = 0
  let y = [ 7, 8, 9, 10, 11, 12 ]
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
