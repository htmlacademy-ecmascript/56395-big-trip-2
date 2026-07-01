import { render } from './framework/render.js';
import EventModel from './model/event-model.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterView from './view/filter-view.js';
import { generateFilters } from './mock/filters-mock.js';

const siteHeaderElement = document.querySelector('.trip-main');
const filtersContainer = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');

const eventModel = new EventModel();

const filters = generateFilters(eventModel.events);

render(new FilterView(filters), filtersContainer);

const boardPresenter = new BoardPresenter({
  boardContainer: siteMainElement,
  eventModel
});

boardPresenter.init();
