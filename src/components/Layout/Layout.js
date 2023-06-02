import { Container } from './Layout.styled';

export const Layout = props => {
  return (
    <Container>
      <header></header>
      <main>{props.children} </main>
      <footer></footer>
    </Container>
  );
};
