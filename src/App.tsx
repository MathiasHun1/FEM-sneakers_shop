import { createTheme, ThemeProvider, Container } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import Box from '@mui/material/Box';

const theme = createTheme({
  typography: {
    fontFamily: ['Kumbh Sans', 'Roboto', 'sans'].join(','),
  },
});

function App() {
  const [itemsCount, setItemsCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 0, sm: '80px', md: '40px', lg: 0 },
          height: '100%',
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: { md: 'flex' },
            flexDirection: { md: 'column' },
          }}
        >
          <Header itemsCount={itemsCount} />
          <Main setItemsCount={setItemsCount} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
