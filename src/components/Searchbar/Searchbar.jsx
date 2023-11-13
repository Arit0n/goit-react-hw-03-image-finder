import { StyledForm, Button, Input, SearchbarStyled } from './Searchbar.styled';

import { Formik } from 'formik';

export const Searchbar = ({ onSubmitFilter }) => {
  return (
    <SearchbarStyled>
      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          onSubmitFilter(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Button type="submit">
            <span>Search</span>
          </Button>

          <Input
            name="search"
            id="search"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    </SearchbarStyled>
  );
};
