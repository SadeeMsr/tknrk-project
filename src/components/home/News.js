import Image from "next/image";
import NewsCard from "./NewsCard";
import SeeAllButton from "../shared/SeeAllButton";

export default function News() {
  return (
    <div className="py-28 px-8 lg:px-28 bg-slate-200 mt-28">
      <h1 className="text-lg">NEWS</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className="mt-28 flex justify-center">
          <SeeAllButton btnName={"See more news"} path={"/news"}/>
        </div>
    </div>
  );
}
