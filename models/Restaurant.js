class Restaurant {
  constructor(id, name, city, website, cuisine, service, handicapAccessible) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.website = website;
    this.cuisine = cuisine;
    this.service = service;
    this.handicapAccessible = handicapAccessible;
  }
}

module.exports = Restaurant;