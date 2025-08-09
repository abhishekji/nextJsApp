
import React from "react";

const News = async ({
  params,
  searchParams,
}: {
  params: Promise<{ newsId: string }>;
  searchParams: Promise<{ cat: string; dog: string }>;
}) => {
  const { newsId } = await params;
  const { cat, dog } = await searchParams;
  return (
    <>
      <div>News</div>
      <div> News {newsId} </div>
      <div> Cats: {cat} </div>
      <div> Dogs: {dog} </div>
    </>
  );
};

export default News;
