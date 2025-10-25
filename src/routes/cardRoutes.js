const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.get('/cards', cardController.getAllCards);
router.get('/cards/:id', cardController.getCardById);
router.post('/cards', cardController.createCard);
router.put('/cards/:id', cardController.updateCard);
router.delete('/cards/:id', cardController.deleteCard);

router.get('/types', cardController.getCardTypes);
router.get('/cities', cardController.getCities);

module.exports = router;