import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/useStore';
import NewsCard from './NewsCard';
import PaginationComponent from './Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NewsList = observer(() => {
  const { newsStore } = useStore();

  useEffect(() => {
    newsStore.fetchNews();
  }, [newsStore]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [newsStore.currentPage]);

  if (newsStore.loading && newsStore.items.length === 0) {
    return (
      <Box display="flex" justifyContent="center" mt={2}>
        <CircularProgress />
      </Box>
    );
  }

  if (newsStore.error) {
    return (
      <Box display="flex" justifyContent="center" mt={2}>
        <Typography color="error">{newsStore.error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {newsStore.loading && (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      )}
      {newsStore.filteredItems.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
      <PaginationComponent />
    </Box>
  );
});

export default NewsList;
