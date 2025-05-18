import { Box } from '@mui/material';
import { Carousel } from 'react-bootstrap';

const images = [
  {
    srcHero: '/images/image-product-1.jpg',
    srcThumb: '/images/image-product-1-thumbnail.jpg',
  },
  {
    srcHero: '/images/image-product-2.jpg',
    srcThumb: '/images/image-product-2-thumbnail.jpg',
  },
  {
    srcHero: '/images/image-product-3.jpg',
    srcThumb: '/images/image-product-3-thumbnail.jpg',
  },
  {
    srcHero: '/images/image-product-4.jpg',
    srcThumb: '/images/image-product-4-thumbnail.jpg',
  },
];

const CarouselSmallScreen = () => {
  return (
    <Box sx={{ display: { md: 'none' } }}>
      <Carousel interval={null} indicators={false}>
        {images.map((image) => (
          <Carousel.Item key={image.srcHero}>
            <Box sx={{ height: '300px', width: '100%' }}>
              <img
                src={image.srcHero}
                alt=""
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselSmallScreen;
