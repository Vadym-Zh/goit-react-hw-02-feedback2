import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './GlobalStyle/Layout/Layout.styled';

import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <Layout>
      <Feedback />
      <GlobalStyle />
    </Layout>
  );
};
