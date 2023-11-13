import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { List } from './ImageGallary.styled';
export const ImageGallery = ({ gallery }) => {
  return (
    <List>
      <ImageGalleryItem gallery={gallery} />
    </List>
  );
};
