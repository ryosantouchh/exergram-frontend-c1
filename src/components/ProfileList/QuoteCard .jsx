import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const QuoteCard = () => {
  const [quotes, setQuotes] = useState([]);
  const [showQuote, setShowQuote] = useState("");

  const token = `Bearer ${window.localStorage.getItem("token")}`;

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_APP_BACKEND_URL + "/quote",
          {
            headers: { Authorization: token },
          }
        );

        // console.log(response.data);
        const newQuote = response.data;

        setQuotes([...newQuote]);
        // console.log(quotes);
      } catch (error) {
        console.log(error);
      }
      // console.log(newQuote);
      //   return response;
    };

    fetchQuote();
  }, []);

  const randomQuote = (quoteInput) => {
    const length = quoteInput.length;
    return quoteInput[Math.floor(Math.random() * length)];
  };

  //   useEffect(() => {
  //     // console.log(quotes);
  //   }, [quotes]);

  return (
    <div className="activity-quote">
      {quotes.length > 0 ? (
        <>
          <p className="activity-quote-title">{randomQuote(quotes).title}</p>
          <p className="activity-quote-author">
            -{randomQuote(quotes).author}-
          </p>
        </>
      ) : null}
    </div>
  );
};
export default QuoteCard;
