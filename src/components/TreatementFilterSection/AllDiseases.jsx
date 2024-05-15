import React from "react";
import { useDiasease } from "./useDiseases";
import { Link, useSearchParams } from "react-router-dom";

const AllDiseases = ({ searchInput }) => {
  const { Diseases, isLoading, isError } = useDiasease();
  const [searchParams, setSearchParams] = useSearchParams();

  // const x = 'azaz'.toLowerCase
  const curLetter = searchParams.get("letter") || null;

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error</p>;
  return (
    <div className=" mx-auto my-8 max-w-[1000px] space-y-5">
      {Diseases?.filter((cur) =>
        curLetter === "null" || !curLetter
          ? cur
          : cur.name.toString().startsWith(curLetter),
      )
        ?.filter((cur) => {
          return cur.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        ?.map((cur) => {
          return (
            <div className=" rounded-md bg-gray-200 p-8 shadow-lg" key={cur.id}>
              <h2 className=" text-2xl font-bold capitalize underline">
                {cur.name.match(/[a-z]/i)[0]}
              </h2>
              <Link
                className=" underline hover:no-underline"
                to={`/disease/${cur.id}`}
              >
                {cur.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default AllDiseases;
