import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/useStore';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

// Pagination Component to navigate between pages
const PaginationComponent = observer(() => {
  const { newsStore } = useStore(); // Access the newsstore using the custom hook

    // Handle page change
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    newsStore.setCurrentPage(value - 1);
  };


  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 4, mb: 4 }}>
        {/* MUI pagination component with controlled page state */}
      <Pagination
        count={newsStore.totalPages}
        page={newsStore.currentPage + 1}
        onChange={handleChange}
        color="primary"
      />
    </Box>
  );
});

export default PaginationComponent;
