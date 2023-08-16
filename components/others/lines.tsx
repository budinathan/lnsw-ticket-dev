import Typography from "../core/typography";

export default function Lines() {
  return (
    <section className="flex gap-2 items-center">
      <div className="h-[1px] w-full bg-black"></div>
      <Typography variant="small" color="muted">
        atau
      </Typography>
      <div className="h-[1px] w-full bg-black"></div>
    </section>
  );
}
