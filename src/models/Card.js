const { v4: uuidv4 } = require('uuid');

class Card {
  constructor(name, typeId, powerLevel, cityId, imageUrl) {
    this.id = uuidv4();
    this.name = name;
    this.typeId = typeId;
    this.powerLevel = powerLevel;
    this.cityId = cityId;
    this.imageUrl = imageUrl;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

// Datos de ejemplo iniciales
let cards = [

  new Card(
    'Dragón Celestial', 
    1, 
    92, 
    1, 
    'https://ejemplo.com/dragon-celestial.jpg'
  ),
  
  new Card(
    'Guerrero de Roca', 
    2, 
    88, 
    3, 
    'https://ejemplo.com/guerrero-roca.jpg'
  ),
  
  new Card(
    'Fénix Renacido', 
    3, 
    95, 
    2, 
    'https://ejemplo.com/fenix-renacido.jpg'
  ),
  
  new Card(
    'Sirena del Abismo', 
    4, 
    85, 
    4, 
    'https://ejemplo.com/sirena-abismo.jpg'
  ),
  
  new Card(
    'Ángel Solar', 
    5, 
    90, 
    5, 
    'https://ejemplo.com/angel-solar.jpg'
  ),
  
  new Card(
    'Caballero de la Noche', 
    6, 
    87, 
    6, 
    'https://ejemplo.com/caballero-noche.jpg'
  ),
  
  new Card(
    'Genio del Viento', 
    1, 
    82, 
    5, 
    'https://ejemplo.com/genio-viento.jpg'
  ),

  new Card(
    'Arcángel Divino', 
    5, 
    94, 
    1, 
    'https://ejemplo.com/arcangel-divino.jpg'
  ),
  

  new Card(
    'Demonio Volcánico', 
    6, 
    91, 
    2, 
    'https://ejemplo.com/demonio-volcanico.jpg'
  ),
  
  new Card(
    'Espíritu del Lago', 
    4, 
    79, 
    3, 
    'https://ejemplo.com/espiritu-lago.jpg'
  ),

  new Card(
    'Kraken Ígneo', 
    3, 
    89, 
    4, 
    'https://ejemplo.com/kraken-igneo.jpg'
  ),

  new Card(
    'Golem de Hielo', 
    2, 
    84, 
    6, 
    'https://ejemplo.com/golem-hielo.jpg'
  )
];

module.exports = { Card, cards };