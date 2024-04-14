import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  background: theme.palette.background.paper,
}));

const StyledCard = styled(Card)({
  maxWidth: 275,
  margin: 'auto',
  height: '100%'
});

const StyledCardMedia = styled(CardMedia)({
  height: 140,
});

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container>
      <StyledPaper elevation={3}>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <StyledCard>
                <StyledCardMedia
                  image={product.image}
                  title={product.title}
                  height="140"
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ratings: {product.rating.count} reviews
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledPaper>
    </Container>
  );
}

export default Home;
