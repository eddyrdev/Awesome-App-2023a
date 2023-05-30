// Importando el enrutador de express
import { Router } from 'express';
// import path 
import path from 'path';

// importado ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';

// Creando una instancia del enrutador de express
const router = Router();


// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");

  console.log(`ROOT_DIR: ${ROOT_DIR}`);
  // res.render('add-product', { layout: false });
  res.render('add-product');
});

// POST /admin/add-product
router.post('/add-product', (req, res) => {
  // Realizaremos la extracción de
  // parametros dentro de la peticion
  console.log(req.body);
  res.redirect('/');
});

// Exportando el enrutador admin
export default router;