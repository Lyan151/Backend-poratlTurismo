const express = require('express');
const router = express.Router();
const contact = require('../controllers/contactController');

 
// ✅ Criar novo contato
router.post('/', contact.createContact);

 
// ✅ Listar todos os contatos
router.get('/', contact.listContact);
 
// ✅ Buscar contato por ID
router.get('/:id',contact.listContactId);
 
module.exports = router;