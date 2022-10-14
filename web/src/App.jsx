import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import PreLoader from "./components/PreLoader/PreLoader";
import ServerError from "./components/Errors/ServerError";
import List from "./components/List/List";

function App() {
  const [loading, setLoading] = useState(true);
  const [Tweets, setTweets] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let response = await fetch(process.env.REACT_APP_BACKENDURL, {
          headers: { "Content-Type": "application/json" },
        });

        response = await response.json();
        response.body.sort(function (a, b) {
          // console.log(new Date(a.date).getTime());
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setTweets(response.body);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />

      {loading ? (
        <PreLoader />
      ) : error ? (
        <ServerError />
      ) : (
        <List Tweets={Tweets} />
      )}
    </div>
  );
}

export default App;
