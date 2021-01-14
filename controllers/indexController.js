const fs = require('fs')
const path = require('path')

let task = fs.readFileSync(path.resolve(__dirname, '../data/tasks.json'), {encoding : 'utf-8'})
task = JSON.parse(task)


const indexController = {
    index : function(req, res, next) {
        res.render('index', {task} );
      },
      agregado : (req, res) => {
        let nuevoTask = {
            name : req.body.name
        }
        fs.writeFileSync('nuevoTask', task)


          res.redirect('/')
      }
}


module.exports = indexController