import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import React from "react";

const SectionContainer = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <div className=" container flex flex-col gap-16 py-10">
      <SectionHeader title={title} />
      {children}
    </div>
  );
};

export default SectionContainer;
