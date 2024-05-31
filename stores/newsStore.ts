import { types, flow, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import { logError } from '../utils/logger';

// Define the model for a news item
const NewsItem = types.model({
  id: types.identifierNumber,
  title: types.string,
  url: types.maybe(types.string),
  time: types.number,
  by: types.string,
  text: types.maybe(types.string),
});

// Define the NewsStore model
const NewsStore = types
  .model({
    items: types.array(NewsItem), // Array of news items
    searchTerm: types.string, // Current search term
    currentPage: types.number, // Current page number
    itemsPerPage: types.number, // Number of items per page
    totalItems: types.number, // Total number of items
    loading: types.boolean, // Loading state
    error: types.maybeNull(types.string), // Error message, can be string or null
  })
  .actions((self) => {
    const fetchNews = flow(function* () {
      self.loading = true; // Set loading state to true
      self.error = null; // Reset error message
      try {
        // Fetch top stories IDs
        const response = yield fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const data: number[] = yield response.json();
        self.totalItems = data.length; // Set total number of items

        // Fetch details for the items on the current page
        const items: typeof NewsItem.Type[] = yield Promise.all(
          data.slice(self.currentPage * self.itemsPerPage, (self.currentPage + 1) * self.itemsPerPage).map(id => (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
          ))
        );

        // Update the items with fetched data
        self.items.replace(items.map(item => ({
          ...item,
          text: item.text || '', // Ensure text field is set
        })));
      } catch (error) {
        // Type assertion to ensure error is of type Error
        self.error = "Failed to fetch news"; // Set error message
        logError(error as Error, "fetchNews action in newsStore"); // Log error
      } finally {
        self.loading = false; // Set loading state to false
      }
    });

    const setSearchTerm = (term: string) => {
      self.searchTerm = term;
    };

    const setCurrentPage = (page: number) => {
      self.currentPage = page;
      fetchNews();
    };

    return { fetchNews, setSearchTerm, setCurrentPage };
  })
  .views((self) => ({
    // Computed view to get filtered items based on the search term
    get filteredItems() {
      return self.items.filter((item) =>
        item.title.toLowerCase().includes(self.searchTerm.toLowerCase())
      );
    },
    // Computed view to get total number of pages
    get totalPages() {
      return Math.ceil(self.totalItems / self.itemsPerPage);
    },
  }));

// Types for the NewsStore instance, snapshot in and out
export interface INewsStore extends Instance<typeof NewsStore> {}
export interface INewsStoreSnapshotIn extends SnapshotIn<typeof NewsStore> {}
export interface INewsStoreSnapshotOut extends SnapshotOut<typeof NewsStore> {}

// Create an instance of the NewsStore
export const newsStore: INewsStore = NewsStore.create({
  items: [],
  searchTerm: '',
  currentPage: 0,
  itemsPerPage: 10,
  totalItems: 0,
  loading: false,
  error: null,
});
