import {useHistory} from 'react-router-dom';
import QuatForm from '../Components/quotes/QuoteForm';


const NewQuote = () => {
  const history=useHistory();

 const onAddQuote=(details)=>{
 
   console.log(details);
   
   history.push('/quotes');
 };

  return <>
  <h1>Add new quatos</h1>
  <QuatForm onAddQuote={onAddQuote}/>
  </>
};

export default NewQuote;