// components/NewsCard.tsx
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import he from 'he';

// Styled card with hover effect and rounded corners
const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;


// Function to clean text from HTML entities
const cleanText = (text: string) => {
  const decodedText = he.decode(text);
  const div = document.createElement('div');
  div.innerHTML = decodedText;
  return div.textContent || div.innerText || '';
};

const NewsCard = ({ id, title, url, by, time, text }: { id: number, title: string; url?: string; by: string; time: number; text?: string }) => {
  const [expanded, setExpanded] = useState(false);

  // Toggle expanded state on click
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    // Format time and date
  const formattedTime = new Date(time * 1000).toLocaleTimeString();
  const formattedDate = new Date(time * 1000).toLocaleDateString();

  return (
    <StyledCard onClick={handleExpandClick}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        {url && (
          <Link href={url} target="_blank" rel="noopener" sx={{ display: 'block', mt: 1 }}>
            Read more
          </Link>
        )}
        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="text.secondary">
              By {by}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="text.secondary">
              Date: {formattedDate}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="text.secondary">
              Time: {formattedTime}
            </Typography>
          </Grid>
        </Grid>
        {expanded && text && (
          <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
            {cleanText(text)}
          </Typography>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default NewsCard;
