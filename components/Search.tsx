import { observer } from "mobx-react-lite";
import { useStore } from "../stores/useStore";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';


// Styled container for the search input
const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.10),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}));

// Styled input base for the search input
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  flex: 1,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

// Search component to search for news items
const Search = observer(() => {
  const { newsStore } = useStore();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    newsStore.setSearchTerm(event.target.value);
  };

  return (
    <Box display="flex" justifyContent="center" mt={2} mb={2} width="100%">
      <SearchWrapper>
        <StyledInputBase
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          value={newsStore.searchTerm}
          onChange={handleSearch}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </SearchWrapper>
    </Box>
  );
});

export default Search;

