import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

import { Img, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    visibleModal: false,
  };

  openModal = () => {
    this.setState(prevState => ({
      visibleModal: !prevState.visibleModal,
    }));
  };

  render() {
    const { image } = this.props;

    return (
      <Item key={image.id}>
        {console.log(image)}
        <Img
          onClick={this.openModal}
          src={image.webformatURL}
          alt={image.tags}
        />
        {this.state.visibleModal === true ? (
          <Modal visible={this.openModal} gallery={image} />
        ) : null}
      </Item>
    );
  }
}
