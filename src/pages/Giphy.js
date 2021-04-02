import React, { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import { Button } from "../components/button";
import { Input } from "../components/input";
import styles from "../styles/Home.module.css";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function Giphy() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [query, setQuery] = useState(null);

  const fetchGifs = (offset: number) => {
    if (query == null || query == undefined) {
      return giphyFetch.trending({ offset, limit: 20 });
    } else {
      return giphyFetch.search(query, {
        sort: "relevant",
        lang: "es",
        limit: 20,
        type: "stickers",
      });
    }
  };

  function GridDemo({ onGifClick }) {
    const [width, setWidth] = useState(
      window.innerWidth < 800 ? window.innerWidth : 800
    );
    return (
      <>
        <Grid
          onGifClick={onGifClick}
          fetchGifs={fetchGifs}
          width={width}
          columns={4}
          gutter={2}
        />
      </>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.headerText}>GIF library</h1>
          <div className={styles.searchContainer}>
            <Input
              className={styles.input}
              name="Search"
              type="text"
              value={searchQuery}
              placeholder="e.g. Cat"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              onClick={() => {
                setQuery(searchQuery);
              }}
            >
              Search
            </Button>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.grid}>
            <GridDemo
              onGifClick={(gif, e) => {
                console.log("gif", gif);
                e.preventDefault();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Giphy;
