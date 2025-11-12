const HrText = ({
  children,
  hide = undefined,
}: {
  children: React.ReactNode;
  hide?: ("before" | "after")[];
}) => {
  return (
    <div
      className={`relative ${!hide?.includes("before") && "before:absolute before:top-0 before:h-px before:w-[200vw] before:-left-[100vw] before:bg-gray-950/5 dark:before:bg-white/10"} ${!hide?.includes("after") && "after:absolute after:bottom-0 after:h-px after:w-[200vw] after:-right-[100vw] after:bg-gray-950/5 dark:after:bg-white/10"}`}
    >
      {children}
    </div>
  );
};

export default HrText;
