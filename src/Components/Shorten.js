import React, { useState, useEffect } from "react";
import {
  MainDiv,
  MainUrl,
  ResultDiv,
  ShortenButton,
  ShortenURLInput,
  CopyButton,
  ShortUrl,
} from "../StyledComponents/ShortenStyle";
import ShortenSVG from "../SVGStyles/bg-shorten-desktop.svg";
import axios from "axios";

function Shorten() {
  const [shtUrl, setUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const url = "https://api.shrtco.de/v2/shorten?url=" + originalUrl;

  const shortenUrl = async () => {
    try {
      const data = axios.get(url).then((response) => {
        setUrl(response.data.result.short_link);
       // console.log(response.data.result.short_link);
        setLoading(false);
      });
      setLoading(true);
    } catch (e) {
      setLoading(false)
      console.log(e);
    }
  };

  function handleChange(e) {
    setOriginalUrl(e.target.value);
    setUrl("");
  }

  function handleCopy() {
    navigator.clipboard.writeText(shtUrl);
  }
  
  function showError() {
      alert("Please input a link first")
  }

  return (
    <div>
      <MainDiv>
        <img
          src={ShortenSVG}
          alt=""
          width="100%"
          height="100%"
          style={{ borderRadius: "8px", position: "absolute" }}
        />
        <ShortenURLInput
          placeholder="Shorten a link here..."
          onChange={handleChange}
        ></ShortenURLInput>
        <ShortenButton onClick={originalUrl ? shortenUrl : showError}>
          {loading ? "Please wait" : "Shorten it!"}
        </ShortenButton>
      </MainDiv>
      {shtUrl.length > 0 && (
        <ResultDiv>
          <MainUrl>{originalUrl}</MainUrl>
          <CopyButton onClick={handleCopy}>Copy</CopyButton>
          <ShortUrl>{shtUrl}</ShortUrl>
        </ResultDiv>
      )}
    </div>
  );
}

export default Shorten;
