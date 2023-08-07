import { HiUserCircle, IoNotificationsOutline } from "@/constant/icons";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Navbar() {
  const router = useRouter();
  if (router.pathname === "/" || router.pathname === "/register") {
    return null;
  }

  return (
    <main className="flex justify-between text-white bg-bluebg py-2 z-[100] px-12 rounded-sm shadow-lg sticky top-0 max-md:px-6">
      <Link href="/home">
        <img src="/logoLNSW.png" alt="logo lnsw" className="h-[45px]" />
      </Link>
      <div className="flex items-center gap-[26px]">
        <IoNotificationsOutline className="text-2xl text-greybg" />
        <div className="flex flex-col items-center ">
          <HiUserCircle className="text-2xl text-greybg" />
        </div>
      </div>
    </main>
  );
}
