import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './assets/style/style.css'

function App() {
   const [giphyData, setGiphyData] = useState([]);

   useEffect(() => {
    const apiKey= 'QJCYmk1aUKV5nz5645nc6DGC64iaW62b';
    const searchKeyword = 'iron man';
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchKeyword}&limit=15`;

    axios
      .get(endpoint)
      .then((response) => {
        setGiphyData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
       });
   }, []);
  return (
    <div>
      <h1> Iron Man FTW</h1>
    <ul>
      {giphyData.map((gifi => (
        <li key={gifi.id}>
          <img src={gifi.images.fixed_height.url} alt={gifi.title} />
        </li>
      )
        ))}
    </ul>
    </div>
  );
}

export default App;
