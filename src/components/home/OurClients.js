"use client"
import Image from 'next/image';
import { useEffect } from 'react';

const OurClients = () => {
  useEffect(() => {
    const scroller = document.querySelector(".scroller[data-speed='slow']");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scroller);
    }
  }, []);

  const addAnimation = (scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  };

  return (
    <div className="scroller bg-[#EAE9EC]" data-speed="slow">
      <div className=" scroller__inner">
      <div className="cursor-pointer opacity-60 hover:opacity-100 duration-500">
          <Image
            src="/assets/client-1-hover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Random image"
          />
        </div>
        <div className="cursor-pointer opacity-60 hover:opacity-100 duration-500">
          <Image
            src="/assets/client-1-hover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Random image"
          />
        </div>
        <div className="cursor-pointer opacity-60 hover:opacity-100 duration-500">
          <Image
            src="/assets/client-1-hover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Random image"
          />
        </div>
        <div className="cursor-pointer opacity-60 hover:opacity-100 duration-500">
          <Image
            src="/assets/client-1-hover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Random image"
          />
        </div>
        <div className="cursor-pointer opacity-60 hover:opacity-100 duration-500">
          <Image
            src="/assets/client-1-hover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Random image"
          />
        </div>
        <div className="cursor-pointer opacity-60 hover:opacity-100 duration-500">
          <Image
            src="/assets/client-1-hover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Random image"
          />
        </div>
        <div className="cursor-pointer opacity-60 hover:opacity-100 duration-500">
          <Image
            src="/assets/client-1-hover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Random image"
          />
        </div>
        <div className="cursor-pointer opacity-60 hover:opacity-100 duration-500">
          <Image
            src="/assets/client-1-hover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Random image"
          />
        </div>
        <div className="cursor-pointer opacity-60 hover:opacity-100 duration-500">
          <Image
            src="/assets/client-1-hover.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Random image"
          />
        </div>
      </div>
    </div>
  );
}

export default OurClients;
