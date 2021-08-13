import {Link} from 'react-router-dom';
import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
      <button><Link to='/quotes'>back</Link></button>
    </figure>
  );
};

export default HighlightedQuote;
