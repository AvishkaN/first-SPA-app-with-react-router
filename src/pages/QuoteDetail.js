import { React } from 'react';
import { useParams, Route } from 'react-router-dom';

import Comments from '../Components/comments/Comments';
import HighLightedQuote from '../Components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
 const params = useParams();

  const quote=DUMMY_QUOTES.find(quote=>quote.id===params.quoteId);

  if(!quote) return <p>no quate</p>

  return (
    <>
      <h1>Quote Detail Page</h1>
      <HighLightedQuote text={quote.text} author={quote.author}/>
     
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    
    </>
  );
};

export default QuoteDetail;
