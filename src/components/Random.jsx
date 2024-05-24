import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
const Random = () => {
  const [gif, setGif] = useState("");
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    setLoading(true);
    const { data } = await axios.get(url);
    setLoading(false);
    const imgSource = data.data.images.downsized_large.url;
    setGif(imgSource);
  }
  function clickHandler() {
    fetchData();
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-1/2  bg-green-500 rounded-md flex flex-col items-center gap-y-5 p-10 h-1/">
      <h1 className="text-3xl underline uppercase font-bold">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} widht="450" />}
      <button
        onClick={clickHandler}
        className="bg-white w-10/12 py-3 rounded-md text-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
