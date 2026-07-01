import { filter } from '../utils/filters.js';

const generateFilters = (events) => Object.entries(filter).map(
  ([filterType, filterEvents]) => ({
    type: filterType,
    count: filterEvents(events).length,
  }),
);

export { generateFilters };
