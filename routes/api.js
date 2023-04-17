var express = require('express');
var router = express.Router();
var multer = require('multer')
var upload = multer({dest: './tpm'})
var apiCtrl = require('../controllers/api.controller')

/* GET home page. */
router.get('/', apiCtrl.list);

router.post('/add', upload.single('image') , apiCtrl.add);

router.put('/edit/:id', upload.single('image') , apiCtrl.edit);

router.delete('/delete/:id', apiCtrl.delete);

module.exports = router;