import React from "react";
import CardArticle from "../ui/CardArticle";


const Article = (props) => {
  return (
    <div className=" my-12 flex flex-col gap-6">
      <h2 className=" relative min-h-40 bg-[url('/article.jpg')] bg-cover bg-bottom bg-no-repeat text-center font-primary text-3xl font-semibold capitalize">
        <span className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-primary text-5xl">
          Article
        </span>
      </h2>

      <div className="grid w-full grid-cols-1 justify-items-center gap-x-4 gap-y-8 bg-cyan-200 p-12 sm:grid-cols-2 md:grid-cols-3 ">
        {[...new Array(6)]?.map((_, i) => (
          <CardArticle key={i} />
        ))}
      </div>

  
    </div>
  );
};

export default Article;
