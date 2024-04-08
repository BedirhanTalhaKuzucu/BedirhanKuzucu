import React, { useMemo } from "react";

function HeaderInfo({ type }: { type: string }) {
  const inhalt = useMemo(() => {
    switch (type) {
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
      default:
        break;
    }
  }, [type]);
  return (
    <div className="my-2 mb-12">
      <a
        href="#"
        className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        tabIndex={0}
        role="link"
      >
        {inhalt?.title}
      </a>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{inhalt?.text}</p>
    </div>
  );
}

export default HeaderInfo;
