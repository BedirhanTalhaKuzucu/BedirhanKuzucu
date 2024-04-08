"use client";
import React from "react";
import Image from "next/image";
import InfoCard from "@/components/ui/infoCard";
import { motion } from "framer-motion";
import { SimpleGrid, Container } from "@chakra-ui/react";
import { repositoriesList, workProjects } from "@/lib/constant";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-cardContainer/3d-card";
import Link from "next/link";
import DefaultModal from "@/components/ui/default-modal";
import Card3dContainer from "@/components/ui/3d-cardContainer/3d-cardContainer";

function ServicesPage() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    // <div className="grid grid-cols-2 gap-x-1 h-full w-full items-start justify-between sm:flex-row mt-[4rem]">
    //   <div>
    //     <h1 className="text-[2rem] text-[#754671] mb-[3rem] font-bold subpixel-antialiased">
    //       WHAT I DO?
    //     </h1>
    //     <div className="grid grid-cols-1  gap-y-[3.5rem]">
    //       <InfoCard
    //         description="Empower your brand in the online world with professional web
    //           solutions. We design customizable and user-friendly websites."
    //         titel="Web Development"
    //         icon="screen"
    //       />
    //       <InfoCard
    //         description="Custom mobile applications tailored to your needs. Development services for both iOS and Android platforms."
    //         titel="Mobile App Development"
    //         icon="mobile"
    //       />
    //       <InfoCard
    //         description="Boost your online sales! Attract customers with secure and scalable e-commerce platforms."
    //         titel="E-commerce Solutions"
    //         icon="world"
    //       />
    //       <InfoCard
    //         description="Be on top in search engines. Effective SEO strategies to increase the visibility of your website."
    //         titel="SEO Consulting"
    //         icon="grafic"
    //       />
    //     </div>
    //   </div>
    //   <div className="h-full grid place-items-center">
    //     <Image
    //       src="/assets/olacak.png"
    //       alt="talha"
    //       width={580}
    //       height={580}
    //       loading="lazy"
    //       className="rounded-lg  h-auto w-3/4"
    //     />
    //   </div>
    // </div>
    <Container maxW="7xl" p="5">
      <DefaultModal toggleModal={showModal} setShowModal={setShowModal} />

      <h1 className="text-[1.5rem] text-[#754671] font-bold subpixel-antialiased text-center self-center">
        WORK PROJECTS
      </h1>

      <SimpleGrid columns={[1, null, 2]} spacing={50} mt={20}>
        {workProjects.map((info, index) => (
          <Card3dContainer
            title={info.title}
            description={info.description}
            cover={info.cover}
            techStack={info.techStack}
            liveLink={info.live}
            url={info.url}
            key={index}
            customButton={{ label: "Details", onClick: setShowModal }}
          />
        ))}
      </SimpleGrid>

      <hr className="mt-6 my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

      <h1 className="text-[1.5rem] text-[#754671] font-bold subpixel-antialiased text-center self-center">
        PERSONAL PROJECTS
      </h1>
      <SimpleGrid columns={[1, null, 2]} spacing={50} mt={20}>
        {repositoriesList().map((repo, index) => (
          <Card3dContainer
            title={repo.title}
            description={repo.description}
            cover={repo.cover}
            techStack={repo.techStack}
            liveLink={repo.live}
            url={repo.url}
            key={index}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ServicesPage;
