import {useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';
import QuatForm from '../Components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import {addQuote} from '../lib/api';


const NewQuote = () => {
  const {sendRequest,status}=useHttp(addQuote);
  const history=useHistory();


  useEffect(()=>{
    console.log(status);
    if(status==='completed'){
      history.push('/quotes');
    }

  },[status,history]);


 const onAddQuote=(QuoteData)=>{
 
   console.log(QuoteData);
   sendRequest(QuoteData);
   
 };

  return <>
  <h1>Add new quatos</h1>
  <QuatForm isLoading={status==='pending'} onAddQuote={onAddQuote}/>
  </>
};

export default NewQuote;