import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function SeeAllButton({btnName, path}) {
  return (
    <div className="flex gap-1 items-center text-slate-500 hover:underline hover:text-black">
      <Link href={path}>{btnName}</Link>
      <HiOutlineArrowRight size={20} />
    </div>
  );
}
