import { useRef,useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [isEntered,setEnteredSatatus]=useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const focusHandler=()=>{
    console.log(`focus`);
    setEnteredSatatus(true);
  };
  const clickHandler=()=>{
    setEnteredSatatus(false);
  };

  return (
    <Card>
      <Prompt when={isEntered} message={(loacation)=>'Are you sure to leave '}/>
      <form className={classes.form} 
        onSubmit={submitFormHandler}
        onFocus={focusHandler}>
       
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={clickHandler}>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
