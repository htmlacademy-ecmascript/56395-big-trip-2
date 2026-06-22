import { destinations } from '../mock/destinations-mock.js';
import { offers } from '../mock/offers-mock.js';
import { events } from '../mock/events-mock.js';


export default class EventModel {
  constructor() {
    this.events = [];
    this.destinations = [];
    this.offers = [];
  }


  init() {
    this.events = events;
    this.destinations = destinations;
    this.offers = offers;
  }

  getEvents() {
    return this.events;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
