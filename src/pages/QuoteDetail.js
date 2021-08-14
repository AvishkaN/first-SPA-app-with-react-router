import { React,useEffect } from 'react';
import { useParams, Route,Link,useRouteMatch } from 'react-router-dom';

import Comments from '../Components/comments/Comments';
import LoadSpinner from '../Components/UI/LoadingSpinner';
import HighLightedQuote from '../Components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import {getSingleQuote} from '../lib/api';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
 const params = useParams();
 const match=useRouteMatch();

 const quote=DUMMY_QUOTES.find(quote=>quote.id===params.quoteId);
 
 const {sendRequest,status,data:loadedQuote,error}=useHttp(getSingleQuote,true);
 
 console.log(match.path);



 
 useEffect(() => {
   sendRequest(params.quoteId);
  }, [sendRequest,params.quoteId])
  

  if(status==='pending'){
    return(
      <div className="centerd">
        <LoadSpinner/>
      </div>
    );
  }

  if(error){
    return  <p className="centered">{error}</p>
  }

  if(!loadedQuote.text) return <p>no quate found</p>

  return (
    <>
    <h1>Quote Detail Page</h1>
    <HighLightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
    
    <Route path={`${match.path}${params.quoteId}`} exact>
      <div className='centered'><Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Comment 👇</Link></div>
    </Route>
     
    <Route path={`${match.path}${params.quoteId}/comments`}>
      <Comments />
    </Route>
    
    </>
  );
};

export default QuoteDetail;
