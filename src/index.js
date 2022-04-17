// import { render } from 'react-dom'
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client'

import { client } from './lib/apolloClient'
import App from './views/App'
import './styles/App.css'
import 'todomvc-app-css/index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root')
// )
