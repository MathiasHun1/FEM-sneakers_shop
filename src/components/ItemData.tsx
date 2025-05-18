import { Typography, Box } from '@mui/material';

const ItemData = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 3 },
          mb: { xs: 4, sm: 3 },
        }}
      >
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '12px', sm: '13px', color: 'var(--clr-grey-500)' },
            letterSpacing: '2px',
            fontWeight: 'bold',
          }}
        >
          SNEAKER COMPANY
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '28px', sm: '48px', md: '44px' },
            fontWeight: 'bold',
            lineHeight: '0.9',
          }}
        >
          Fall Limited Edition Sneakers
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '15px', sm: '16px' },
            color: 'var(--clr-grey-500)',
          }}
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { sm: 'column' },
          justifyContent: { xs: 'space-between' },
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '1rem', sm: '1.rem' },
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              color: 'var(--clr-grey-950)',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            $125.00
          </Typography>
          <Typography
            component="span"
            sx={{
              display: 'inline-block',
              px: '10px',
              backgroundColor: 'var(--clr-grey-950)',
              height: 'fit-content',
              color: 'white',
              borderRadius: '6px',
            }}
          >
            50%
          </Typography>
        </Box>

        <Typography
          sx={{
            textDecoration: 'line-through 2px',
            color: 'var(--clr-grey-500)',
            fontWeight: 'bold',
          }}
        >
          $250.00
        </Typography>
      </Box>
    </>
  );
};

export default ItemData;
