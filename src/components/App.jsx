import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { getSearch } from './API/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Button } from './Button/Button';

import { GlobalStyle } from 'GlobalStyle';
import { AppBox } from './App.styled';

export class App extends Component {
  state = {
    image: [],
    search: '',
    page: 1,
    visibleModal: false,
    loading: false,
    total: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      getSearch(this.state.search, this.state.page)
        .then(res => res.json())
        .then(result =>
          this.setState(prevState => ({
            image: [...prevState.image, ...result.hits],
            total: result.total,
          }))
        )
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  clickLoad = () => {
    this.setState(prevSt => ({
      page: prevSt.page + 1,
    }));
    console.log(this.state.image, this.state.page);
  };

  onSubmitForm = newSearch => {
    this.setState({
      image: [],
      search: newSearch,
      page: 1,
      loading: false,
      total: 1,
    });
  };

  render() {
    return (
      <AppBox>
        <Searchbar onSubmitFilter={this.onSubmitForm} />
        <ImageGallery gallery={this.state.image} openModal={this.openModal} />
        {this.state.loading && <Loader />}
        {this.state.total / 12 > this.state.page && (
          <Button clickLoad={this.clickLoad} />
        )}
        <GlobalStyle />
      </AppBox>
    );
  }
}
