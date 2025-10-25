const { cards } = require('../models/Card');
const cardTypes = require('../models/CardType');
const cities = require('../models/City');

class Database {
  constructor() {
    this.cards = cards;
    this.cardTypes = cardTypes;
    this.cities = cities;
  }

  getAllCards() {
    return this.cards.map(card => {
      const type = this.cardTypes.find(t => t.id === card.typeId);
      const city = this.cities.find(c => c.id === card.cityId);
      
      return {
        ...card,
        type: type ? type.name : 'Desconocido',
        city: city ? city.name : 'Desconocida'
      };
    });
  }

  getCardById(id) {
    const card = this.cards.find(c => c.id === id);
    if (!card) return null;

    const type = this.cardTypes.find(t => t.id === card.typeId);
    const city = this.cities.find(c => c.id === card.cityId);

    return {
      ...card,
      type: type ? type.name : 'Desconocido',
      typeDetails: type,
      city: city ? city.name : 'Desconocida',
      cityDetails: city
    };
  }

  createCard(cardData) {
    const { Card } = require('../models/Card');
    const newCard = new Card(
      cardData.name,
      cardData.typeId,
      cardData.powerLevel,
      cardData.cityId,
      cardData.imageUrl
    );
    
    this.cards.push(newCard);
    return newCard;
  }

  updateCard(id, cardData) {
    const cardIndex = this.cards.findIndex(c => c.id === id);
    if (cardIndex === -1) return null;

    this.cards[cardIndex] = {
      ...this.cards[cardIndex],
      ...cardData,
      updatedAt: new Date()
    };

    return this.cards[cardIndex];
  }

  deleteCard(id) {
    const cardIndex = this.cards.findIndex(c => c.id === id);
    if (cardIndex === -1) return false;

    this.cards.splice(cardIndex, 1);
    return true;
  }

  getAllCardTypes() {
    return this.cardTypes;
  }

  getAllCities() {
    return this.cities;
  }
}

module.exports = new Database();