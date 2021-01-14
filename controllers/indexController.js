const fs = require('fs')
const path = require('path')


const indexController = {
    index : function(req, res, next) {
        res.render('index' );
      },
      agregado : (req, res) => {

        let archivoTask = fs.readFileSync(path.resolve(__dirname, '../data/tasks.json'), {encoding : 'utf-8'});
        let listaDeTareas;
        if (archivoTask == "") {
          listaDeTareas = [];
        } else{
          listaDeTareas = JSON.parse(archivoTask);
        }

        let nuevoTask = {
          name : req.body.title
        }

        //guardar al usuario
        listaDeTareas.push(nuevoTask);
        listaDeTareasJSON = JSON.stringify(listaDeTareas)
        fs.appendFileSync('tasks.json', listaDeTareasJSON)


          res.redirect('/')
      }
}


module.exports = indexController