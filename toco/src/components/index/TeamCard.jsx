import React from "react";
import Image from "next/image";
import Jiho from "../../../public/jiho.png";

function TeamCard() {
  return (
    <div>
      <Image src={Jiho} />
      <div>이지호</div>
      <div>frontend developer</div>
    </div>
  );
}

export default TeamCard;
