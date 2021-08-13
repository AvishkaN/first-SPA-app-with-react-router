import QuatList from './../Components/quotes/QuoteList';


const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const AllQuotes = () => {
  return <QuatList quotes={DUMMY_QUOTES}/>
};

export default AllQuotes;