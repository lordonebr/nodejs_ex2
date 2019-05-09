var express = require('express');
var router = express.Router();

let products = { items: [] } 

router.post('/products', (req, res) => {

  /*JSON EXEMPLO:
  {
    "id":1, 
    "name":"Andre", 
    "description":"new"
  }
  */

  products.items.push(req.body);
  res.end('O item foi inserido!');
});

router.put('/products/:id', (req, res) => {
 
  /*JSON EXEMPLO:
  {
    "id":1, 
    "name":"Andre", 
    "description":"update"
  }
  */

  var update = false;
  for(var i = 0; i < products.items.length; i++){
    if(products.items[i]){
      if(products.items[i].id == req.params.id){
        products.items[i] = req.body;
        res.end('O item de ID = '.concat(req.params.id.toString()).concat(' foi atualizado!'));
        update = true;
        break;
      }
    }
  }

  if(update === false)
    res.end('O item de ID = '.concat(req.params.id.toString()).concat(' não existe!'));
});

router.delete('/products/:id', (req, res) => {

  var qtDel = 0;
  for(var i = 0; i < products.items.length; i++){
    if(products.items[i]){
      if(products.items[i].id == req.params.id){
        products.items.splice(i, 1);
        i--;
        qtDel++;
      }
    }
  }

  if(qtDel == 0)
    res.end('O item de ID = '.concat(req.params.id.toString()).concat(' não existe!'));
  else if(qtDel == 1)
    res.end('O item de ID = '.concat(req.params.id.toString()).concat(' foi deletado!'));
  else if(qtDel > 1){
    res.end(qtDel.toString().concat(' itens de ID = ').concat(req.params.id.toString()).concat(' foram deletados!'));
  }
});

router.get('/products/list', function(req, res, next) {

  // testes
  //products.items.push({'id' : 1, 'name' : 'andre', 'description' : 'teste'})
  //products.items.push({'id' : 2, 'name' : 'alice', 'description' : 'teste2'})

  res.json(products);
});

module.exports = router;
