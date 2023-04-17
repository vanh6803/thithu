var express = require('express');
var router = express.Router();
var multer = require('multer')
var upload = multer({dest: './tpm'})
var userCtrl = require('../controllers/site.controller')

/* GET home page. */
router.get('/', userCtrl.list);

router.get('/add', userCtrl.add);
router.post('/add', upload.single('image') , userCtrl.add);

router.get('/edit/:id', userCtrl.edit);
router.post('/edit/:id', upload.single('image') , userCtrl.edit);

router.get('/delete/:id', userCtrl.delete);
router.post('/delete/:id', userCtrl.delete);

module.exports = router;
