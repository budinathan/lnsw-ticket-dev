import Button from "@/components/core/button";
import Typography from "@/components/core/typography";
import HomeNav from "@/constant/home-db";
import Link from "next/link";
export default function NavHome() {
  const { dash } = HomeNav;

  return (
    <>
      {dash.map((item, index) => {
        return (
          <section
            key={index}
            className="h-fit flex flex-col gap-2 bg-white  shadow-lg rounded-md"
            style={{ padding: "1rem" }}
          >
            <Typography variant="large">{item.title}</Typography>
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
