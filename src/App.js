import React,{Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Components/layout/layout';

// import AllQuotes from './pages/AllQuotes';
import Loadingspinner from './../src/Components/UI/LoadingSpinner';
// import QuoteDetail from './pages/QuoteDetail';
// import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';

// optimized lazy laoding
const NewQuote=React.lazy(()=>import('./pages/NewQuote'));
const QuoteDetail=React.lazy(()=>import('./pages/QuoteDetail'));
const AllQuotes=React.lazy(()=>import('./pages/AllQuotes'));



function App() {
  return (
    <Layout>
      <Suspense
      fallback={<Loadingspinner/>}>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/quotes' />
            </Route>
            <Route path='/quotes' exact>
              <AllQuotes />
            </Route>
            <Route path='/quotes/:quoteId' >
              <QuoteDetail />
            </Route>
            <Route path='/new-quote'>
              <NewQuote />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
