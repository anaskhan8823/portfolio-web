import Link from "next/link";
import React from "react";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }, index) => (
                <Link
                  key={`${column.title}-${name}-${index}`}
                  href={link || "#"} // fallback if link is empty
                  target={link ? "_blank" : undefined}
                  rel={link ? "noreferrer noopener" : undefined}
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon className="w-5 h-5 text-gray-200" />}
                  <span className={`text-[15px] ml-[6px] ${!link && "cursor-default"}`}>
                    {name}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center pt-10">
          &copy; {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
