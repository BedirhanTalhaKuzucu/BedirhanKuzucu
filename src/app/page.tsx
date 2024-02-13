"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import InfoButton from "@/components/infoButton";
import InfoCard from "@/components/infoCard";
import InteractiveCard from "@/components/interactiveCard";

export default function Home() {
  const [open, setopen] = useState("");

  return (
    <>
      <div className="grid grid-cols-2 h-full ml-4 items-start justify-between sm:flex-row">
        <div className=" h-100 grid grid-rows-2 self-center place-items-center ps-4">
          <h1
            className="inline-block text-[#754671] dark:text-light
      text-8xl font-bold w-full capitalize  !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl"
            style={{ opacity: "1" }}
          >
            <span
              className="inline-block"
              style={{ opacity: "1", transform: "none" }}
            >
              I&nbsp;
            </span>
            <span
              className="inline-block"
              style={{ opacity: "1", transform: "none" }}
            >
              make&nbsp;
            </span>
            <span
              className="inline-block"
              style={{ opacity: "1", transform: "none" }}
            >
              your&nbsp;
            </span>
            <span
              className="inline-block"
              style={{ opacity: "1", transform: "none" }}
            >
              Dreams&nbsp;
            </span>
            <span
              className="inline-block"
              style={{ opacity: "1", transform: "none" }}
            >
              come&nbsp;
            </span>
            <span
              className="inline-block"
              style={{ opacity: "1", transform: "none" }}
            >
              with&nbsp;
            </span>
            <span
              className="inline-block"
              style={{ opacity: "1", transform: "none" }}
            >
              codes&nbsp;
            </span>
          </h1>
          <p className="my-4 text-base font-medium">
            It is very important for me to prioritize user experience in every
            line. I invite you to my creative world, let's build your project
            together
          </p>
          <button
            type="button"
            className="text-white bg-[#754671] hover:bg-purple-800  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Contact Me
          </button>
        </div>
        <div className="h-100 h-full grid place-items-center">
          <Image
            src="/assets/softwareDeveloper.png"
            alt="talha"
            width={580}
            height={580}
            loading="lazy"
            className="rounded-lg  h-auto w-3/4"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 h-full ml-4 items-start justify-between sm:flex-row">
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
      </div>
    </>
  );
}
