import QuatList from './../Components/quotes/QuoteList';
import NoQuotesFound from './../Components/quotes/NoQuotesFound';
import Loadspinner from './../Components/UI/LoadingSpinner';
import {getAllQuotes} from './../lib/api';
import useHttp from './../hooks/use-http';
import {useEffect} from 'react';


// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
//   { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
// ];

const AllQuotes = () => {
  const {sendRequest,status,data:loadedQuote,error}=useHttp(getAllQuotes,true);

  useEffect(()=>{
    sendRequest();
  },[sendRequest]);

  if(status==='pending'){
    console.log(1);

    return(
      <div className='centered'>
        <Loadspinner/>
      </div>
    );
  }

  if(error){
    console.log(1);

    return <p className='centered focused'>{error}</p>
  }

  if(status==='completed' && (!loadedQuote || loadedQuote.length ===0)){
    console.log(1);

    return <NoQuotesFound/>
  }

  return <QuatList quotes={loadedQuote}/>
};

export default AllQuotes;