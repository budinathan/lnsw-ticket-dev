import Button from "@/components/core/button";
import Typography from "@/components/core/typography";
import HomeNav from "@/constant/home-db";
import Link from "next/link";

import { AiOutlineHistory, AiFillBook } from "react-icons/ai";
import { HiChatAlt2 } from "react-icons/hi";
export default function NavHome() {
  const { dash } = HomeNav;

  return (
    <>
      {dash.map((item, index) => {
        const Icon = icons[index];
        return (
          <section
            key={index}
            className="h-fit flex flex-col gap-2 bg-white  shadow-lg rounded-md"
            style={{ padding: "1rem" }}
          >
            <div className="flex justify-between items-center">
              <Typography variant="large">{item.title}</Typography>
              <Icon icon={icons[index]} className="text-2xl" />
            </div>

            <Typography variant="small">{item.desc}</Typography>
            <Link href={item.link}>
              <Button variant="default" size="default" className="w-full">
                {item.linkText}
              </Button>
            </Link>
          </section>
        );
      })}
    </>
  );
}

const icons = [AiOutlineHistory, AiFillBook, HiChatAlt2];
