import Image from "next/image";
import React from "react";

interface HomeCardProps {
  title: string;
  description: string;
  imgUrl: string;
  color: string;
  handleClick: () => void;
}

export default function HomeCard({
  title,
  description,
  imgUrl,
  color,
  handleClick,
}: HomeCardProps) {
  return (
    <div
      className={`${color} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={imgUrl}
          alt={title}
          width={27}
          height={27}
          className="max-sm:size-10"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
}
