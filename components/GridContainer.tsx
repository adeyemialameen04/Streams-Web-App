import { cn } from "@/lib/utils";

 const GridContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "my_container grid grid-cols-1 max-w-[1020px] md:grid-cols-2 gap-3 py-8",
        className !== "" ? className : ""
      )}
    >
      {children}
    </div>
  );
};


export default GridContainer