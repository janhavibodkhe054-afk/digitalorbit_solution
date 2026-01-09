import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import React from "react";

function TermsCondition() {
  return (
    <>
    <Helmet>
  <title>Terms and Conditions | DIGITALORBIT SOLUTIONS LLP - IT Training Institute in Pune</title>
  <meta name="description" content="Read the terms and conditions for using the services offered by ArrayLogic Academy, the leading IT training institute in Pune. This page includes important legal information regarding our courses, internships, career services, and usage of our website." />
  <meta name="keywords" content="Terms and Conditions, ArrayLogic Academy, IT training institute Pune, website usage policy, course terms, internship program terms, career services terms, legal information, user agreement, privacy policy, website terms, IT course agreement, Pune IT training, usage guidelines" />
</Helmet>

      <Navbar />
      <div className="px-8 py-6 mt-12 md:mt-20 bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Terms and Conditions
        </h1>
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Acceptance of this Agreement</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            By clicking on the ‘SIGNUP’ or ‘SUBMIT’ option, the participant
            (“You” or “Your“) agrees to the Terms and Conditions, obligations,
            representations, warranties, and agreements contained herein (the
            “Agreement“). In the event, You are not willing to accept the
            Agreement, You shall not be authorized or allowed to proceed further
            to view or use in any manner any content, information, and services
            published, available, or provided on{" "}
            <a
              href="https://arraylogicacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://arraylogicacademy.com
            </a>{" "}
            (the “Website“), which is owned, maintained, and monitored by
            Technogeeks(“Us“, “We“ or “Our“).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Content and Courseware</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            As a part of our Services offered through our Website or classroom,
            We shall grant you access to our content, courseware, practice
            tests, and other information, documents, and data which may be in
            audio, video, written, graphic, recorded, photographic, or any
            machine-readable format in relation to the specific certification
            training course You have registered for (“Content and
            Courseware“).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Usage of Personal Information of Participants</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            We reserve the right to feature Your picture in any photos, videos,
            or other promotional material used by Us. Further, We may use Your
            personal information to inform You about other certification training
            courses offered by Us. However, We shall not distribute or share
            Your personal information with any third party marketing database or
            disclose Your personal information to any third party except on a
            case-to-case basis after proper verification of such third party or
            if required under any applicable law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Limitation of Liability</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            You expressly agree that use of the Website, the Services, and the
            Content and Courseware are at Your sole risk. We do not warrant that
            the Website or the Services or access to the Content and Courseware
            will be uninterrupted or error-free, nor is there any warranty as to
            the results that may be obtained from the use of the Website, the
            Services, or the Content and Courseware or as to the accuracy or
            reliability of any information provided through the Website, the
            Services, or the Content and Courseware. In no event will We or any
            person or entity involved in creating, producing, or distributing the
            Website, the Services, or the Content and Courseware be liable for
            any direct, indirect, incidental, special, or consequential damages
            arising out of the use of or inability to use the Website, the
            Services, or the Content and Courseware.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Term and Termination</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            This Agreement will become effective upon Your acceptance of the
            terms of this Agreement by Your clicking on the “Sign up” OR
            “Submit” button and, subject to the terms and conditions of this
            Agreement, will remain in effect till You maintain a current, fully
            paid-up online Participant Account, or until terminated by Us,
            whichever is earlier. We reserve the right to terminate this
            Agreement and block Your access to the Content and Courseware with
            immediate effect by sending a written notice through email to You to
            this effect.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Indemnity</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            You agree to indemnify and hold Us, Our contractors, licensors,
            directors, officers, employees, and agents, harmless from and
            against any and all claims, losses, damages, liabilities, and
            expenses including attorneys’ fees, arising out of Your unauthorized
            use of the Website, the Services, and the Content and Courseware or
            any violation or breach of this Agreement or any provisions hereof.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Waiver</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            Neither failure nor delay on the part of any party to exercise any
            right, remedy, power, or privilege hereunder shall operate as a
            waiver thereof, or of the exercise of any other right, remedy,
            power, or privilege. No term of this Agreement shall be deemed
            waived unless such waiver shall be in writing and signed by the
            party claimed to have waived.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Entire Agreement</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            This Agreement, along with the Privacy Policy, Refund Policy,
            Rescheduling Policy, Terms of Use, and any additional guidelines,
            rules, and/or disclaimers posted on the Website constitutes the
            entire agreement governing Your use of our Website and supersedes
            any prior agreements, if any, relating to any matter dealt within
            this Agreement.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default TermsCondition;
