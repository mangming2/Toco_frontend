import React from "react";
import Image from "next/image";
import Jiho from "../../../public/jiho.png";

function TeamCard({ img, name, job }) {
  return (
    <div>
      <Image src={img} />
      <div>{name}</div>
      <div>{job}</div>
    </div>
  );
}

export default TeamCard;
