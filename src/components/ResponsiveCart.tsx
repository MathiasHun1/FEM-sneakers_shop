import {
  Popper,
  ClickAwayListener,
  Box,
  Card,
  useMediaQuery,
  Typography,
  Divider,
  Stack,
  IconButton,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { type SetStateAction } from 'react';
import type React from 'react';

type Props = {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<SetStateAction<boolean>>;
  anchorEl: AnchorObject | null;
  itemsCount: number;
  setItemsCount: React.Dispatch<SetStateAction<number>>;
};

type AnchorObject = {
  header: HTMLDivElement | null;
  icon: HTMLDivElement | null;
};

const ResponsiveCart = ({
  cartOpen,
  setCartOpen,
  anchorEl,
  itemsCount,
  setItemsCount,
}: Props) => {
  const matches = useMediaQuery('(max-width: 600px)');

  // a little mock data, since the app is design only
  const itemData = {
    image: '/images/image-product-1-thumbnail.jpg',
    price: 125,
    text: 'Fall Limited Edition Sneakers',
  };

  return (
    <Popper
      open={cartOpen}
      anchorEl={matches ? anchorEl?.header : anchorEl?.icon}
      placement="bottom"
    >
      <ClickAwayListener onClickAway={() => setCartOpen(false)}>
        <Card
          elevation={12}
          sx={{
            width: `${matches ? '95vw' : 'unset'}`,
            transform: 'translateY(10px) ',
            py: 3,
            borderRadius: '10px',
          }}
        >
          <Box sx={{ pb: 3, px: 1.8 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Cart
            </Typography>
          </Box>

          <Divider
            component="div"
            sx={{ mb: 3, backgroundColor: 'black', opacity: '0.1' }}
          />

          {itemsCount === 0 && (
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
                width: '360px',
                height: '120px',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--clr-grey-950)',
                }}
              >
                Your cart is empty
              </Typography>
            </Box>
          )}

          {itemsCount > 0 && (
            <Box sx={{ px: 3 }}>
              <Stack direction={'row'} spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ width: '50px' }}>
                  <img src="/images/image-product-1-thumbnail.jpg" alt="" />
                </Box>

                <Box>
                  <Typography variant="body1">{itemData.text}</Typography>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ color: 'var(--clr-grey-500)' }}
                  >
                    {itemData.price} x {itemsCount}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      color: 'var(--clr-grey-950)',
                      fontWeight: 'bold',
                      ml: 1,
                    }}
                  >
                    ${(itemData.price * itemsCount).toFixed(2)}
                  </Typography>
                </Box>

                <IconButton onClick={() => setItemsCount(0)}>
                  <DeleteIcon sx={{ color: 'var(--clr-grey-300)' }} />
                </IconButton>
              </Stack>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'var(--clr-orange-500)',
                  width: '100%',
                  color: 'var(--clr-grey-950)',
                  fontWeight: 'bold',
                }}
              >
                Checkout
              </Button>
            </Box>
          )}
        </Card>
      </ClickAwayListener>
    </Popper>
  );
};

export default ResponsiveCart;
