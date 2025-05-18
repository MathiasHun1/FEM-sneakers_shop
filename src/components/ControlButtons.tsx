import React, { useState } from 'react';
import type { SetStateAction } from 'react';
import { Grid, Button, Box, IconButton, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ControlButtons = ({
  setItemsCount,
}: {
  setItemsCount: React.Dispatch<SetStateAction<number>>;
}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count == 0) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  return (
    <Grid container spacing={{ xs: 2 }}>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '4px',
            backgroundColor: 'var(--clr-grey-50)',
          }}
        >
          <IconButton
            onClick={decrement}
            aria-label="remove from cart"
            sx={{
              padding: '6px',
              paddingInline: '16px',
              color: 'var(--clr-orange-500)',
            }}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>

          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', color: 'var(--clr-grey-950)' }}
          >
            {count}
          </Typography>

          <IconButton
            onClick={increment}
            aria-label="add to cart"
            sx={{
              padding: '6px',
              paddingInline: '16px',
              color: 'var(--clr-orange-500)',
            }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 8 }}>
        <Button
          onClick={() => setItemsCount((prev) => prev + count)}
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          disableElevation
          fullWidth
          sx={{
            backgroundColor: 'var(--clr-orange-500)',
            color: 'var(--clr-grey-950)',
          }}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default ControlButtons;
