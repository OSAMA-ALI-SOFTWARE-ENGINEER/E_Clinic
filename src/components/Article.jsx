
import CardArticle from "../ui/CardArticle";
import Button from "../ui/Button";

const Article = () => {
  return (
    <div className=" my-12 flex flex-col gap-6">
      <h2 className=" font-secondary relative min-h-40 bg-[url('/article.jpg')] bg-cover bg-bottom bg-no-repeat text-center text-3xl font-black uppercase">
        <span className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-primary text-5xl">
          Article
        </span>
      </h2>

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 justify-items-center gap-x-4 gap-y-8 bg-cyan-200 p-12 sm:grid-cols-2 md:grid-cols-3 ">
        {[...new Array(6)]?.map((_, i) => (
          <CardArticle key={i} />
        ))}
      </div>

      <div className=" flex justify-center">
        <Button className="btn btn-primary bg-sky-400 hover:bg-sky-800 text-black hover:text-white">See more</Button>
      </div>
    </div>
  );
};

export default Article;
