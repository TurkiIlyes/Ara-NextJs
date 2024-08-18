"use client"
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import React from "react";

const SectionContainer = ({
  id,
  title,
  children,
  isLogged,
}: {
  id?: string;
  title: string;
  children: JSX.Element;
  isLogged?: boolean;
}) => {
  return (
    <div id={id} className=" container flex flex-col gap-16 py-10">
      <SectionHeader title={title} isLogged={isLogged} />
      {children}
    </div>
  );
};

export default SectionContainer;
