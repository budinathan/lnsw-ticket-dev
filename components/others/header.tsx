import Link from "next/link";
import { HiUserCircle } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import Breadcrumbs from "../core/breadcrumbs";

export default function Head() {
  return (
    <main>
      <section className="flex justify-between px-16 max-md:px-6 text-white bg-bluebg py-2 z-[100] rounded-sm shadow-lg sticky top-0">
        <Link href="/home">
          <img
            src="/logoLNSW.png"
            alt="logo lnsw"
            className="h-[45px] max-md:h-[40px]"
          />
        </Link>
        <div className="flex items-center gap-[26px]">
          <IoNotificationsOutline className="text-2xl text-greybg" />
          <div className="flex flex-col items-center ">
            <HiUserCircle className="text-2xl text-greybg" />
          </div>
        </div>
      </section>
      <Breadcrumbs />
    </main>
  );
}
