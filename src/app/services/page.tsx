"use client";
import React from "react";
import Image from "next/image";
import InfoCard from "@/components/ui/infoCard";
import { motion } from "framer-motion";
import { SimpleGrid, Container } from "@chakra-ui/react";
import RepositoryCard from "./ProjectsCard";
import { repositoriesList } from "@/lib/constant";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

function ServicesPage() {
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
      <SimpleGrid columns={[1, 2, 3]} spacing={50} mt={20}>
        {/* {repositoriesList().map((repo, index) => (
          <motion.div whileHover={{ y: -5 }} key={index}>
            <RepositoryCard
              title={repo.title}
              description={repo.description}
              cover={repo.cover}
              techStack={repo.techStack}
              url={repo.url}
              stargazers_count={repo.stargazers_count}
            />
          </motion.div>
        ))} */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/public/assets/bedirhan.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </SimpleGrid>
    </Container>
  );
}

export default ServicesPage;
