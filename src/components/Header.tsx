import React, { useState, useRef, useEffect, type SetStateAction } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ResponsiveCart from './ResponsiveCart';

import logo from '/images/logo.svg';

const pages = ['Collections', 'Men', 'Women', 'About', 'Contant'];

type AnchorObject = {
  header: HTMLDivElement | null;
  icon: HTMLDivElement | null;
};

type Props = {
  itemsCount: number;
  setItemsCount: React.Dispatch<SetStateAction<number>>;
};

function Header({ itemsCount, setItemsCount }: Props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<AnchorObject | null>(null);
  const anchorRefHeader = useRef(null);
  const anchorRefIcon = useRef(null);

  useEffect(() => {
    setAnchorEl({
      header: anchorRefHeader.current,
      icon: anchorRefIcon.current,
    });
  }, []);

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        ref={anchorRefHeader}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid var(--clr-grey-100)',
            px: { xs: '1rem', sm: 0 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-end', md: 'center' },
              gap: { xs: '1rem', md: '3rem' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{
                p: 0,
                color: 'black',
                display: { xs: 'block', md: 'none' },
              }}
            >
              <img src="/images/icon-menu.svg" alt="" />
            </IconButton>
            <Box sx={{ flexShrink: 0 }}>
              <img src={logo} alt="" />
            </Box>
            {/*Big screen menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'baseline',
              }}
              component="nav"
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  disableFocusRipple
                  disableRipple
                  sx={{
                    mb: 0,
                    pt: 5,
                    pb: 4,
                    fontSize: '15px',
                    display: 'block',
                    color: 'var(--clr-grey-500)',
                    borderBottom: '3px solid transparent',
                    '&:focus': {
                      color: 'var(----clr-grey-950)',
                      borderBottom: '3px solid var(--clr-orange-500)',
                      borderRadius: 0,
                      borderWidth: '80%',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              flexWrap: 'nowrap',
              gap: { xs: '24px', md: '48px' },
            }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => setCartOpen(!cartOpen)}
              ref={anchorRefIcon}
            >
              <Badge
                badgeContent={itemsCount}
                color="primary"
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                sx={{
                  '& span': {
                    fontSize: '10px',
                    backgroundColor: 'var(--clr-orange-500)',
                    px: '10px',
                    py: 0,
                  },
                }}
              >
                <img src="/images/icon-cart.svg" alt="" />
              </Badge>
            </IconButton>
            <IconButton
              sx={{
                p: 0,
                '&:focus': { outline: 'solid var(--clr-orange-500)' },
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/images/image-avatar.png"
                sx={{
                  width: { xs: '36px', sm: '50px' },
                  height: { xs: '36px', sm: '50px' },
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <ResponsiveCart
        anchorEl={anchorEl}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        itemsCount={itemsCount}
        setItemsCount={setItemsCount}
      />
    </>
  );
}
export default Header;
