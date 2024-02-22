"use client";
import React, { useState } from "react";
import InfoButton from "../infoButton";
import Image from "next/image";
import { motion } from "framer-motion";
import InteractiveCard from "../interactiveCard";

const ReasonforContact = () => {
  const [open, setopen] = useState("");

  return (
    <React.Fragment>
      <div className="grid mt-12 self-center place-items-center ps-4">
        <div className="grid grid-cols-1  gap-y-[3.5rem]">
          <h1 className="text-[1.5rem] text-[#754671] font-bold subpixel-antialiased">
            WHY SHOULD YOU CONTACT ME?
          </h1>

          <InfoButton
            title="Member of Team"
            text="Are you looking for a good team member for your development
                  team in a challenging project?"
            onClick={() => setopen("teamMember")}
            icon="team"
          />
          <InfoButton
            title="I am Freelancer"
            text="Do you want to turn your dream project into reality?"
            onClick={() => setopen("freeLancer")}
            icon="project"
          />
          <InfoButton
            title="I am member of the open-source community"
            text="I would gladly contribute to the challenges in the
                  technologies I am interested in"
            onClick={() => setopen("openSource")}
            icon="code"
          />
        </div>
      </div>
      {open === "" ? (
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
          <InteractiveCard reason={open} />
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default ReasonforContact;
