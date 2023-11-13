import { Img, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ gallery }) => {
  return gallery.map(item => {
    return (
      <Item key={item.id}>
        <Img src={item.webformatURL} alt={item.tags} />
      </Item>
    );
  });
};
