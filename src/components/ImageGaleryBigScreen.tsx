import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useState } from 'react';

type Product = { hero?: string; thumb?: string; id?: number };

const products: Product[] = [];

for (let i = 0; i < 4; i++) {
  const product: Product = {};

  product.hero = `/images/image-product-${i + 1}.jpg`;
  product.thumb = `/images/image-product-${i + 1}-thumbnail.jpg`;
  product.id = i;

  products.push(product);
}

const ImageGaleryBigScreen = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <Paper sx={{ display: { xs: 'none', md: 'block' } }} elevation={0}>
      <Grid container spacing={4}>
        <Grid size={12} sx={{ borderRadius: '15px', overflow: 'hidden' }}>
          <img src={products[activeId].hero} alt="" />
        </Grid>

        <Grid size={12}>
          <Grid container spacing={4}>
            {products.map((p) => (
              <Grid key={p.id} size={12 / products.length}>
                <Box
                  onClick={() => setActiveId(p.id!)}
                  sx={{
                    p: 0,
                    borderRadius: '10px',
                    overflow: 'hidden',
                    outline: `${
                      activeId === p.id ? '4px solid var(--clr-orange-500)' : ''
                    }`,
                    opacity: `${activeId === p.id ? '0.7' : ''}`,
                    '&:hover': {
                      opacity: '0.7',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <img src={p.thumb} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ImageGaleryBigScreen;
