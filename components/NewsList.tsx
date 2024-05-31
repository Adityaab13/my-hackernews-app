import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/useStore';
import NewsCard from './NewsCard';
import PaginationComponent from './Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// NewsList component to display the list of news items
const NewsList = observer(() => {
  const { newsStore } = useStore();
  
  // Fetch news items when the component mounts
  useEffect(() => {
    newsStore.fetchNews();
  }, [newsStore]);

  // Scroll to top when the current page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [newsStore.currentPage]);

  // Show loading indicator if data is being fetched
  if (newsStore.loading && newsStore.items.length === 0) {
    return (
      <Box display="flex" justifyContent="center" mt={2}>
        <CircularProgress />
      </Box>
    );
  }

  // Show error message if there is an error
  if (newsStore.error) {
    return (
      <Box display="flex" justifyContent="center" mt={2}>
        <Typography color="error">{newsStore.error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Show loading indicator if data is being fetched */}
      {newsStore.loading && (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      )}
      {/* Render the list of news cards */}
      {newsStore.filteredItems.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
      {/* Render the pagination component */}
      <PaginationComponent />
    </Box>
  );
});

export default NewsList;
