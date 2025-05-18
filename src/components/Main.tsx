import type React from 'react';
import { Box, Grid } from '@mui/material';
import type { SetStateAction } from 'react';

import ItemData from './ItemData';
import ControlButtons from './ControlButtons';
import ImageGaleryBigScreen from './ImageGaleryBigScreen';
import CarouselSmallScreen from './CarouselSmallScreen';

const Main = ({
  setItemsCount,
}: {
  setItemsCount: React.Dispatch<SetStateAction<number>>;
}) => {
  return (
    <Box
      component="main"
      sx={{
        height: { xs: 'unset' },
        pb: { xs: 5, md: 0 },
        display: { md: 'grid' },
        placeItems: { md: 'center' },
        flexGrow: 1,
      }}
    >
      <Grid container spacing={{ xs: 3, sm: 6, md: '128px' }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          pt={{
            sm: 5,
            md: 0,
          }}
        >
          <CarouselSmallScreen />
          <ImageGaleryBigScreen />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            px: { xs: '1rem', sm: 0 },
            display: { md: 'flex' },
            flexDirection: 'column',
            justifyContent: { md: 'center' },
            gap: 4,
          }}
        >
          <ItemData />
          <ControlButtons setItemsCount={setItemsCount} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
