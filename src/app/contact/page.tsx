import React from "react";
import ContactIconLinks from "./contactIconLinks";
import ContactForm from "./contactForm";

function ContactPage() {
  return (
    <div className=" my-12 mx-auto md:px-6 h-full">
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <ContactIconLinks />
            <div className="mx-auto max-w-[700px]">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl  text-2xl font-medium title-font mb-4 text-[#754671]">
                  Contact Me
                </h1>
                <p className="mx-auto leading-relaxed text-base text-[#754671]">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify.
                </p>
              </div>
              <div className="mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
