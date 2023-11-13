import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';

import { getSearch } from './API/api';
import { AppBox } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    image: [],
    search: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      getSearch(this.state.search, this.state.page)
        .then(res => res.json())
        .then(result =>
          this.setState({ image: [...prevState.image, ...result.hits] })
        );
    }
  }
  clickLoad = () => {
    console.log(this.state.image, this.state.page);

    this.setState(prevSt => ({
      page: prevSt.page + 1,
    }));
    console.log(this.state.image, this.state.page);
  };

  onSubmitForm = newSearch => {
    this.setState({ image: [], search: newSearch, page: 1 });
    console.log(newSearch);
  };
  render() {
    return (
      <AppBox>
        <Searchbar onSubmitFilter={this.onSubmitForm} />
        <ImageGallery gallery={this.state.image} />
        {this.state.image.length <= 0 ? null : (
          <Button clickLoad={this.clickLoad} />
        )}
        <GlobalStyle />
      </AppBox>
    );
  }
}
