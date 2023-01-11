import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          country
          image
          description
          category
          language
          published_at
          title
          source
          url
        }
        pagination {
          count
          limit
          total
          offset
        }
      }
    }
  `;

  const res = await fetch(
    "https://namur.stepzen.net/api/hissing-quokka/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );


  const newResponse = await res.json();

  const news = sortNewsByImage(newResponse.data.myQuery);

  return news;
};

export default fetchNews;

//  stepzen import curl http://api.mediastack.com/v1/news?access_key=3607769ec8ec65bc8e94fbc3a6d2f626&sources=business,sports
//  stepzen import curl http://api.mediastack.com/v1/news?access_key=YOUR_ACCESS_KEY&countries=us%2Cgb&limit=100&offset=0&sort=published_desc
