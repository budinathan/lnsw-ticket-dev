import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import Breadcrumbs from "../core/breadcrumbs";

import PopoverIcon from "../popover/popoverContent";

export default function Head() {
  return (
    <main>
      <section className="flex justify-between px-16 max-md:px-6 text-white bg-bluebg py-2 z-[100] rounded-sm shadow-lg sticky top-0">
        <Link href="/home">
          <img
            src="/logoLNSW.png"
            alt="logo lnsw"
            className="h-[40px] max-md:h-[35px]"
          />
        </Link>
        <div className="flex items-center gap-[26px]">
          <IoNotificationsOutline />
          <PopoverIcon />
        </div>
      </section>
      <Breadcrumbs />
    </main>
  );
}
