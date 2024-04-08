import React from "react";
import {
  VerticalStepperContainer,
  VerticalStepperItem,
} from "../../components/ui/verticalStepper";

function About() {
  return (
    <div>
      <h1 className="inline-block text-[#754671] dark:text-light text-8xl font-bold w-full capitalize  !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl">
        Career
      </h1>
      <VerticalStepperContainer>
        <VerticalStepperItem
          step={1}
          link="https://www.link-innovation.de/"
          header="Link Innovation GmbH"
          subHeader="Front-End Developer"
          description="Projekte"
          dateRange="06/2023 - Bis jetzt"
          backgroundImage="bg-[url('https://media.licdn.com/dms/image/C560BAQEotptcP7ZRmg/company-logo_200_200/0/1630568766309/link_innovation_gmbh_logo?e=2147483647&v=beta&t=KmqE7sdEdWjmlC_dF8tMemaAwek8ta7PwL5caekX5S8')]"
        >
          <ul className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
            <li className="font-medium">
              Digitale Lösung Projekt für effizientes Änderungsmanagement im
              Technikbereich | VW Group
              <ol className="ps-5 mt-2 space-y-1 list-disc list-inside italic">
                <li>
                  Entwicklung moderner Benutzeroberfläche unter Verwendung von
                  React
                </li>
                <li>Effizientes State Management mit Redux.</li>
                <li>
                  Implementierung von Unit-Tests mit React Testing Library.
                </li>
                <li>Integration mit REST APIs.</li>
                <li>
                  Erfahrung im Schreiben modularer und wiederverwendbarer Codes
                  unter Verwendung von Build-Tools und Paketmanagern
                </li>
                <li>
                  Teilnahme an Sprint-Planungen und Beitrag zu
                  Entwicklungsprozessen gemäß agiler Methodik.
                </li>
              </ol>
            </li>
            <li className="font-medium">
              Datenintegration Projekt im Automobilsektor | VW Group
              <ul className="ps-5 mt-2 space-y-1 list-disc list-inside italic">
                <li>
                  Entwicklung moderner Benutzeroberfläche unter Verwendung von
                  Angular, Verwendung von Angular i18n für mehrsprachige
                  Unterstützung und Fast XML Parser zur effizienten Verarbeitung
                  von XML-Daten
                </li>

                <li>
                  Schnelles Erlernen und Anpassen an interne CSS-Bibliotheken
                  des Unternehmens.
                </li>
                <li>
                  Interaktion mit SOAP und REST APIs zur Datenübertragung.
                </li>
                <li>
                  Verbesserung der Codequalität durch das Schreiben von
                  Unit-Tests mit Karma und Jasmine.
                </li>
                <li>
                  Teilnahme an Sprint-Planungen und Beitrag zu
                  Entwicklungsprozessen gemäß agiler Methodik unter Verwendung
                  von Large Scale Scrum (LeSS).
                </li>
              </ul>
            </li>
          </ul>
        </VerticalStepperItem>
        <VerticalStepperItem
          step={2}
          link="https://clarusway.com/"
          header="Clarusway"
          subHeader="IT-Mentor"
          description="Leistungen"
          dateRange="01/2023 - 06/2023"
          backgroundImage="bg-[url('https://the-winston-project.imgix.net/610beec5aea874132acbafda/234_ClarusWay_logo.png')]"
        >
          <ul className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
            <ol className="ps-5 mt-2 space-y-1 list-disc list-inside italic">
              <li>
                Design und Entwicklung von Frontend und Backend-Projekten mit
                HTML5, CSS3, SASS, JavaScript, React.js und Django.
              </li>
              <li>Erstellen von Restful API mit Django Rest-Framework.</li>
              <li>
                Technische Anleitung und Mentoring für Studenten, um Projekte
                und Übungen zu überprüfen und zu unterstützen.
              </li>
            </ol>
          </ul>
        </VerticalStepperItem>
      </VerticalStepperContainer>

      <hr className="mt-12 my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

      <h1 className="text-[1.5rem] text-[#754671] font-bold subpixel-antialiased text-center self-center">
        EDUCATION
      </h1>
      <VerticalStepperContainer>
        <VerticalStepperItem
          step={1}
          link="https://www.ruhr-uni-bochum.de/de"
          header="Universität Bochum"
          subHeader="Deutschkurs(A2-C1)"
          dateRange="04/2020 - 07/2021"
          backgroundImage="bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/65/Ruhr-Universit%C3%A4t_Bochum_logo.svg')]"
        ></VerticalStepperItem>
        <VerticalStepperItem
          step={2}
          link="https://gazi.edu.tr/en"
          header="Gazi Universität"
          subHeader="Rechtswissenschaftliche Fakultät"
          dateRange="09/2015 - 06/2019"
          backgroundImage="bg-[url('data:image/png;base64,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')]"
        ></VerticalStepperItem>
      </VerticalStepperContainer>
    </div>
  );
}

export default About;
