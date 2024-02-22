import Image from "next/image";
import ReasonforContact from "./ui/home/reasonforContact";

export default function Home() {
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
            line. I invite you to my creative world, let is build your project
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
        <ReasonforContact />
      </div>
    </>
  );
}
