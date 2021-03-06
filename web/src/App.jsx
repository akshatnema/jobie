import React,{useState} from "react";
import Header from './components/Header/Header';
import List from './components/List/List';

import { useEffect } from "react";

function App() {
  const [Tweets, setTweets] = useState([]);
  useEffect(() => {
    async function fetchData(){
      let response;
      await fetch(process.env.REACT_APP_BACKENDURL, {
        headers: { 'Content-Type': 'application/json'}
      }).then(res => res.json()).then((data)=> response = data)
      response.body.sort(function(a,b){
        console.log(new Date(a.date).getTime())
         return new Date(b.date).getTime() - new Date(a.date).getTime()
       })
      setTweets(response.body)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <Header/>
      <br />
      <List Tweets={Tweets}/>
    </div>
  );
}

export default App;
