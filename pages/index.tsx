import React from 'react';
import Search from '../components/Search';
import NewsList from '../components/NewsList';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Home page component
const Home = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
      <Typography variant="h3" align="center" gutterBottom> {/* Header for the page */}
        HackerNews X LUCI
      </Typography>
        <Search /> {/* Search component for filtering news items */}
        <NewsList /> {/* NewsList component to display the list of news items */}
      </Box>
    </Container>
  );
};

export default Home;