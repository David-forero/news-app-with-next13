import React from "react";
import fetchNews from "../lib/fetchNews";
import { categories } from "../constants";
import NewList from "./NewList";

const HomePage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return <div>
    <NewList news={news} />
  </div>;
};

export default HomePage;
