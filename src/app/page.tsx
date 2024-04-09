import Image from "next/image";
import ReasonforContact from "../components/ui/home/reasonforContact";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 h-full ml-4 items-start justify-between sm:flex-row">
        <div className=" h-100 grid grid-rows-2 self-center place-items-center ps-4">
          <h1
            className="inline-block text-[#754671] dark:text-light text-8xl font-bold w-full capitalize  !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl"
            style={{ opacity: "1" }}
          >
            <span
              className="inline-block"
              style={{ opacity: "1", transform: "none" }}
            >
              Hello and welcome! &nbsp;
            </span>
          </h1>
          <p className="my-4 text-base font-medium">
            My name is Bedirhan and I am a software developer. This is my
            digital space where I showcase the projects I prepared with code.
            Here you will find projects developed using various technology
            stacks. I created this platform to both explore my personal
            interests and share my professional experiences. Every project is
            part of my learning journey and every feedback helps me take a step
            forward. If you are interested, feel free to discover more about my
            projects and get in touch. Let is undertake new projects together!
          </p>
          <Link
            href="/contact"
            className="text-white bg-[#754671] hover:bg-purple-800  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Contact Me!
          </Link>
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

      <hr className="mt-12 my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <div className="h-full">
        <h1 className="text-[1.5rem] text-[#754671] font-bold subpixel-antialiased text-center self-center">
          WHAT I AM DOING
        </h1>
        <div className="grid grid-cols-3   ml-4 mb-10 items-start justify-between sm:flex-row">
          <ReasonforContact />
        </div>
      </div>
    </>
  );
}
