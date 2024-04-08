"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import InteractiveCard from "../interactiveCard/interactiveCard";
import InfoCard from "../infoCard";

const ReasonforContact = () => {
  const [cardType, setCardType] = useState("");

  return (
    <React.Fragment>
      <div className="grid mt-12 mb-12 self-center place-items-center ps-4">
        <div className="grid grid-cols-1  gap-y-[3.5rem]">
          <InfoCard
            description="I can build a beautiful and scalable SPA using modern Framework"
            titel="Frontend Development"
            icon="screen"
            onEnter={() => setCardType("frontend")}
            onMouseLeave={() => setCardType("")}
          />
          <InfoCard
            titel="Backend Development"
            description="handle database, server, api using Express, Django & other popular frameworks"
            onEnter={() => setCardType("backend")}
            onMouseLeave={() => setCardType("")}
            icon="database"
          />
          <InfoCard
            titel="OpenSource Contributer"
            description="I would gladly contribute to the challenges in the
                  technologies I am interested in"
            icon="grafic"
            onEnter={() => setCardType("teamMember")}
            onMouseLeave={() => setCardType("")}
          />
          {/* <InfoCard
            titel="I am learning"
            description="I would gladly contribute to the challenges in the
                  technologies I am interested in"
            onEnter={() => setCardType("openSource")}
            onMouseLeave={() => setCardType("")}
            icon="code"
          /> */}
        </div>
      </div>
      {cardType === "" ? (
        <div className="h-100 col-span-2 h-full grid place-self-end place-items-center">
          <Image
            src="/assets/pngwing.com.png"
            alt="talha"
            width={500}
            height={500}
            loading="lazy"
            className=" w-1/2 place-self-center"
          />
        </div>
      ) : (
        <motion.div
          className="col-span-2 self-center place-self-end mt-[1rem] mx-[4rem]"
          animate={{ x: 30 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <InteractiveCard type={cardType} />
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default ReasonforContact;
