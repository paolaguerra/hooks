import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading 
      ? <LoadingQuote /> 
      : <Quote author={author} quote={quote} />}

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};
