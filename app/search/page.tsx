import fetchNews from "../../lib/fetchNews";
import NewList from "../NewList";

type Props = {
  searchParams?: { term: string };
};

const page = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );

  return (
    <div>
      <h1 className="headerTitle">Search Result for {searchParams?.term} </h1>
      <NewList news={news} />
    </div>
  );
};

export default page;
