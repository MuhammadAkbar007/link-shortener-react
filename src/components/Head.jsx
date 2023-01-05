import React, { useState, useEffect, useRef } from "react";
import fetchBitly from "../api/fetchBitly";
import Result from "./Result";

const Head = () => {
  useEffect(() => inputRef.current.focus(), []);

  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const inputRef = useRef(null);

  const isValidLink = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (error) {
      return false;
    }
  };

  const handleClick = async () => {
    if (isValidLink(longUrl)) {
      const short = await fetchBitly(longUrl);
      setShortUrl(short);
    } else {
      setShortUrl("invalid");
    }
  };

  return (
    <div>
      <h1 className="p-5">Shorten your links ⛓ here 👇</h1>
      <div className="row">
        <div className="col-md-9">
          <input
            type="text"
            className="form-control"
            placeholder="https://github.com/MuhammadAkbar007/link-shortener-react"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleClick();
            }}
            ref={inputRef}
          />
        </div>
        <div className="col-md-3">
          <button
            disabled={!longUrl}
            className="btn btn-primary btn-lg"
            onClick={handleClick}
          >
            Shorten
          </button>
        </div>
      </div>
      {shortUrl === "invalid" ? (
        <div className="col-md-6 offset-3 mt-5 bg-danger rounded shadow p-5">
          <h1>Please Provide a VALID Link !</h1>
        </div>
      ) : (
        <Result shortUrl={shortUrl} />
      )}
    </div>
  );
};

export default Head;
