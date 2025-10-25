const db = require('../data/database');

const cardController = {
  getAllCards: (req, res) => {
    try {
      const cards = db.getAllCards();
      res.json({
        success: true,
        count: cards.length,
        data: cards
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener las cartas',
        error: error.message
      });
    }
  },

  getCardById: (req, res) => {
    try {
      const card = db.getCardById(req.params.id);
      
      if (!card) {
        return res.status(404).json({
          success: false,
          message: 'Carta no encontrada'
        });
      }

      res.json({
        success: true,
        data: card
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener la carta',
        error: error.message
      });
    }
  },

  createCard: (req, res) => {
    try {
      const { name, typeId, powerLevel, cityId, imageUrl } = req.body;

      if (!name || !typeId || !powerLevel || !cityId) {
        return res.status(400).json({
          success: false,
          message: 'Faltan campos obligatorios: name, typeId, powerLevel, cityId'
        });
      }

      const newCard = db.createCard({
        name,
        typeId: parseInt(typeId),
        powerLevel: parseInt(powerLevel),
        cityId: parseInt(cityId),
        imageUrl: imageUrl || 'https://ejemplo.com/default-card.jpg'
      });

      res.status(201).json({
        success: true,
        message: 'Carta creada exitosamente',
        data: newCard
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al crear la carta',
        error: error.message
      });
    }
  },

  updateCard: (req, res) => {
    try {
      const updatedCard = db.updateCard(req.params.id, req.body);
      
      if (!updatedCard) {
        return res.status(404).json({
          success: false,
          message: 'Carta no encontrada'
        });
      }

      res.json({
        success: true,
        message: 'Carta actualizada exitosamente',
        data: updatedCard
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al actualizar la carta',
        error: error.message
      });
    }
  },

  deleteCard: (req, res) => {
    try {
      const deleted = db.deleteCard(req.params.id);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: 'Carta no encontrada'
        });
      }

      res.json({
        success: true,
        message: 'Carta eliminada exitosamente'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al eliminar la carta',
        error: error.message
      });
    }
  },

  getCardTypes: (req, res) => {
    try {
      const types = db.getAllCardTypes();
      res.json({
        success: true,
        data: types
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener los tipos de carta',
        error: error.message
      });
    }
  },

  getCities: (req, res) => {
    try {
      const cities = db.getAllCities();
      res.json({
        success: true,
        data: cities
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error al obtener las ciudades',
        error: error.message
      });
    }
  }
};

module.exports = cardController;