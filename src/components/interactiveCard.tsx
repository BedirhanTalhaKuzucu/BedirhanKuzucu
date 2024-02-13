import React, { useCallback, useMemo } from "react";

function InteractiveCard({ reason }: { reason: string }) {
  console.log("as");
  const inhalt = useMemo(() => {
    switch (reason) {
      case "teamMember":
        return {
          title: "Unfortunately, I'm currently part of a team full time.",
          text: "I love being part of a team in a project full of challenges. However, I am not suitable for such a position right now. I would be happy to contact you when I am suitable for such a position in the future. Please leave your email here so I can note it.",
        };
      case "freeLancer":
        return {
          title: "Mobile and Web Application Projects",
          text: "We can turn your dream application into reality as quickly as possible and with the most up-to-date technologies. Can you review my portfolio for reference? Do not hesitate to contact us.",
        };
      case "openSource":
        return {
          title: "OpenSource Contibuter",
          text: "I am an openSource supporter. So far, I have received support from different developers. I believe there should be as much output as there is input. If there is anything I can help with, please do not hesitate to contact me.",
        };
    }
  }, [reason]);

  return (
    <>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="mt-2">
          <a
            href="#"
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabIndex={0}
            role="link"
          >
            {inhalt?.title}
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {inhalt?.text}
          </p>
        </div>

        {reason === "teamMember" ? (
          <>
            <div className="m-auto w-3/4 mt-[3rem]">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
            </div>

            <div className="flex items-center justify-center mt-4">
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                tabIndex={0}
                role="link"
              >
                Send Email
              </a>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default InteractiveCard;
