const yaml = require('js-yaml');
const fs   = require('fs');
let doc

let ft0 = yaml.safeLoad(fs.readFileSync('./base/0', 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
  }))
let ft4 = yaml.safeLoad(fs.readFileSync('./base/4', 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
}))

module.exports = find = (req) => {
  let film = req.query.find.toLowerCase()
  let re = new RegExp(film)
  console.log(film)
  let doc = []
  let numb = 0
  doc[0] = []
  doc[0][0] = ''
  doc[0][1] = 'blank'
  doc[0][2] = ''
  doc[0][3] = 0
  doc[1] = []
  doc[1][0] = ''
  doc[1][1] = 'blank'
  doc[1][2] = ''
  doc[1][3] = 0
  doc[2] = []
  doc[2][0] = ''
  doc[2][1] = 'blank'
  doc[2][2] = ''
  doc[2][3] = 0
  doc[3] = []
  doc[3][0] = ''
  doc[3][1] = 'blank'
  doc[3][2] = ''
  doc[3][3] = 0
  doc[4] = []
  doc[4][0] = ''
  doc[4][1] = 'blank'
  doc[4][2] = ''
  doc[4][3] = 0

  let y = 0
  let ft = ft0.concat(ft4)
  ft.forEach (function(el) {

    let nameEn = el[1][1].toString().toLowerCase()
    let nameRu = el[1][0].toString().toLowerCase()
    
    if (nameEn.match(re) || nameRu.match(re)) {
      doc[y] = []
      doc[y][0] = numb
      doc[y][1] = el[0][0]
      doc[y][2] = el[1][1]
      doc[y][3] = el[3][0]
      ++y
    }
    ++numb
  })
  console.log(doc);
  return doc
}
