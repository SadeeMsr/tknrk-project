import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Logo } from "./Logo";

const socialMediaLinks = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
  { Icon: FaInstagram, href: "https://www.instagram.com/" },
  { Icon: FaTwitter, href: "https://twitter.com/" },
  { Icon: FaYoutube, href: "https://www.youtube.com/" },
];

const footerSections = [
  {
    id: 0,
    title: "QUICK LINKS",
    items: [
      { id: 1, title: "Projects", path: "/projects" },
      { id: 2, title: "Portfolio", path: "/portfolio" },
      { id: 3, title: "About", path: "/about" },
      { id: 5, title: "Contact", path: "/contact" },
    ],
  },
  {
    id: 1,
    title: "Address",
    items: [
      { id: 0, details: "52/1, Road#12, Block #D, Uttara, Dhaka, Bangladesh." },
      { id: 1, phone: "+256773928080, +256700595967" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="text-white bg-[#090C02] lg:px-28 px-8 py-16">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-8">
        <div className="lg:w-[60%] w-full flex flex-col">
          <div className=" lg:w-[70%] w-full flex lg:flex-row flex-col gap-5">
            <div>
              <Logo windowFill="#FFFFFF" />
            </div>
            <p className="text-sm md:mt-0 mt-5">
              In a nutshell, we,<strong> Tanya Karim N. R. Khan & Associates</strong> leads
              Bangladeshi architecture with a blend of theory, modernity, and
              cultural heritage. Renowned for Radical Design, their top-tier
              team fosters innovation and shapes architectural futures.
              Committed to excellence, we nurture talent and advance
              architectural discourse in Bangladesh.
            </p>
          </div>
          <div className="flex gap-5 cursor-pointer mt-10 ">
            {socialMediaLinks.map(({ Icon, href }, index) => (
              <Link key={index} target="_blank" href={href}>
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:w-[40%] w-full flex lg:flex-row flex-col gap-10 text-sm">
          {footerSections.map((element) => (
            <div key={element.id} className={`${element.id===0? "w-[30%]":"w-[70%]"}`}>
              <h1 className="font-semibold uppercase">{element.title}</h1>
              <ul className="text-slate-400 cursor-pointer mt-2 flex flex-col">
                {element.items.map((item) => {
                  if (item.path) {
                    return (
                      <Link
                        href={item.path}
                        key={item.id}
                        className="hover:text-slate-100 mt-2"
                      >
                        {item.title}
                      </Link>
                    );
                  }
                  return (
                    <li key={item.id} className="hover:text-slate-100 mt-2">
                      {item.details || item.phone}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
