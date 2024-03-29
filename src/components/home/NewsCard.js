import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function NewsCard() {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-5">
      <div className="overflow-hidden rounded relative w-full lg:w-[40%] lg:h-full h-[15rem] cursor-pointer hover:opacity-75">
        <Image
          alt="Random"
          src="/assets/hero-images/image-02.jpg"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="lg:w-[60%] w-full flex flex-col gap-5">
        <Link href="#">
          <h1 className="font-semibold hover:underline cursor-pointer">
            আর্কেশিয়া বিশেষ স্থাপত্য পুরস্কার জিতলেন বায়েজিদ মাহবুব
          </h1>
        </Link>
        <p className="text-slate-600">
          স্থাপত্যের জন্য এশিয়ার মর্যাদাপূর্ণ পুরস্কার আর্কেশিয়া স্থাপত্য
          পুরস্কার-২০২৩-এ দুটি স্বর্ণপদক জিতেছেন স্থপতি বায়েজিদ মাহবুব
          খোন্দকার। গতকাল সোমবার ফিলিপাইনের…
        </p>
      </div>
    </div>
  );
}
