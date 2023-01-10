"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter();



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form onSubmit={handleSubmit}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-blue-400"
        value={input}
        placeholder="Search Keywords"
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        disabled={!setInput}
        type="submit"
        className="text-blue-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
