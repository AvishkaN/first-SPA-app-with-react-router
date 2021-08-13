import { Fragment } from 'react';
import { useHistory,useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};


const QuoteList = (props) => {

  const history=useHistory();
  const location=useLocation();

  const quaryParams=new URLSearchParams(location.search);
  const isSoartingAscending=quaryParams.get('sort')==='asc';


  const sortedQuatos=sortQuotes(props.quotes,isSoartingAscending)

  const sortingHandler=()=>{
    console.log(`sorting`);
    
    history.push(`/quotes?sort=${isSoartingAscending ? 'desc' :'asc'}`);
    console.log(location);


  }


  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>Sort {isSoartingAscending ?'Descending':'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuatos.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
