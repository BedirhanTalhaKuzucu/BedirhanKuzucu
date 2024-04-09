"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import InteractiveCard from "../interactiveCard/interactiveCard";
import InfoCard from "../infoCard";
import { boolean } from "zod";

const ReasonforContact = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [cardType, setCardType] = useState("");

  const isActiveDiv = useMemo(() => {
    let isActive = {
      frontend: false,
      backend: false,
      openSource: false,
    };
    if (cardType === "frontend") {
      return { ...isActive, frontend: true };
    }
    if (cardType === "backend") {
      return { ...isActive, backend: true };
    }
    if (cardType === "openSource") {
      return { ...isActive, openSource: true };
    }
    return isActive;
  }, [cardType]);
  return (
    <React.Fragment>
      <div
        ref={divRef}
        className="grid mt-12 mb-12 self-center place-items-center ps-4"
      >
        <div className="grid grid-cols-1  gap-y-[3.5rem]">
          <InfoCard
            description="I can build a beautiful and scalable SPA using modern Framework"
            titel="Frontend Development"
            icon="screen"
            onClick={() => setCardType("frontend")}
            active={isActiveDiv.frontend}
          />
          <InfoCard
            titel="Backend Development"
            description="handle database, server, api using Express, Django & other popular frameworks"
            onClick={() => setCardType("backend")}
            icon="database"
            active={isActiveDiv.backend}
          />
          <InfoCard
            titel="OpenSource Contributer"
            description="I would gladly contribute to the challenges in the
                  technologies I am interested in"
            icon="grafic"
            onClick={() => setCardType("openSource")}
            active={isActiveDiv.openSource}
          />
          {/* <InfoCard
            titel="I am learning"
            description="I would gladly contribute to the challenges in the
                  technologies I am interested in"
            onClick={() => setCardType("openSource")}
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
