import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, MotionProps } from "framer-motion";

import pictureBackground from "../assets/picture.jpg";
import pictureMe from "../assets/photo.png";

import Avatar from "../components/avatar";
import Skills from "../components/cards/skills";
import Project from "../components/cards/project";

import { skillsDeveloper, skillsDesigner } from "../config/skills";
import { designProjects, developmentProjects } from "../config/projects";
import { RateLimitError } from "../types/http-errors";

declare module "react" {
  interface CSSProperties {
    "--door_open_percent"?: number;
  }
}

function Index() {
  const { scrollY } = useScroll();
  const [doorStyle, setDoorStyle] = useState<React.CSSProperties>({});
  const [headerStyle, setHeaderStyle] = useState<React.CSSProperties>({
    transform: `scale(1)`,
    position: "sticky",
    opacity: 1,
  });
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const door: MotionProps = {
    style: doorStyle,
  };

  scrollY.on("change", () => {
    setDoorStyle({
      "--door_open_percent": Math.min(scrollY.get() / 40, 1),
    });
    setHeaderStyle({
      transform: `scale(${Math.min(scrollY.get() / 800, 1) * 12 + 1})`,
      position: scrollY.get() > 800 ? "relative" : "sticky",
      opacity: 1 - Math.min(scrollY.get() / 400, 1),
    });
  });

  async function sendMail() {
    try {
      setIsSent(false);
      setIsSending(true);

      if (
        !nameRef.current?.value ||
        !emailRef.current?.value ||
        !messageRef.current?.value
      ) {
        throw new Error("Please fill all the fields.");
      }

      const { status } = await fetch(
        "https://portfolio.api.bclement.fr/mailer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
          }),
        }
      );
      if (status === 429) {
        throw new RateLimitError(
          "You have reached the rate limit. Try again later."
        );
      }
      if (status !== 200) {
        throw new Error("An error occured.");
      }

      setError(false);
      setIsSent(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <header className="homepage" style={headerStyle}>
        <div id="informations">
          <Avatar />
          <h1>Brandon Clément</h1>
          <h2>
            Junior Full Stack{" "}
            <span className="text-secondary-500">Developer</span>
          </h2>
        </div>

        <div id="doors">
          <motion.div id="left" {...door}></motion.div>
          <motion.div id="right" {...door}></motion.div>
        </div>
      </header>

      <section id="about_me" className="container">
        <h1>About me</h1>
        <p>
          I'm Brandon, a 20 years old junior full stack developer. Currently in
          my first year of BUT MMI, I am looking for a work-study contract in
          web development starting from September 2023.
        </p>
        <div className="photo">
          <img src={pictureBackground} />
          <img id="me" src={pictureMe} />
        </div>
      </section>

      <section id="skills" className="container">
        <h1>What are my skills?</h1>
        <div className="grid">
          <Skills
            title="Web Developer"
            description="Since I was 15 years old, I have been passionate about development.
            I have been able to develop several projects. I have a good
            knowledge of the web stack and I am constantly learning new
            technologies."
            color="bg-primary-500"
            href="#web_dev"
            tags={skillsDeveloper}
          />
          <Skills
            title="UI Designer"
            description="To develop my projects, I had to learn to design them. I have been able to develop a good knowledge of the design process. I am able to design a website from scratch. I am also able to make a complete branding."
            color="bg-secondary-500 text-gray-900"
            href="#design"
            light={true}
            tags={skillsDesigner}
          />
        </div>
      </section>
      <section className="container" id="portfolio">
        <h1>Some realizations</h1>
        <section id="web_dev">
          <h2>Web Development</h2>
          <div className="grid">
            {developmentProjects.slice(0, 4).map((project) => (
              <Project project={project} key={project.slug} />
            ))}
          </div>
          <a href="/development" className="btn center big mt-24">
            View more
          </a>
        </section>
        <section id="design">
          <h2>Design</h2>
          <div className="grid">
            {designProjects.slice(0, 4).map((project) => (
              <Project project={project} key={project.slug} />
            ))}
          </div>
          <a
            href="/design"
            className="btn center big mt-24"
            id="view_more_design"
          >
            View more
          </a>
        </section>
      </section>
      <section className="container" id="contact">
        <h1>Next project with you?</h1>
        <h2>Get in touch</h2>
        <div className="grid cols-3">
          <a
            className="card_link"
            href="https://github.com/BriqueAuBob"
            target="_blank"
            style={{ "--hoverColor": "#181717" } as React.CSSProperties}
          >
            GitHub
          </a>
          <a
            className="card_link"
            href="https://www.linkedin.com/in/brandon-cl%C3%A9ment/"
            target="_blank"
            style={{ "--hoverColor": "#0077B5" } as React.CSSProperties}
          >
            LinkedIn
          </a>
          <a
            className="card_link"
            href="https://twitter.com/briqueaubob"
            target="_blank"
            style={{ "--hoverColor": "#1DA1F2" } as React.CSSProperties}
          >
            Twitter
          </a>
        </div>
        <div>
          <div className="card">
            <div className="content relative">
              {isSending && (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="loader"
                >
                  Sending email...
                </motion.div>
              )}
              <h3>Send me a message</h3>
              <p>
                You can send me a message if you want to work with me or if you
                have any questions.
              </p>
              {isSent && (
                <motion.div
                  animate={{
                    opacity: [0, 1],
                    y: [0, -4, 10],
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  className="message success"
                >
                  Message sent with success! I will answer you asap :)
                </motion.div>
              )}
              {error && (
                <motion.div
                  animate={{
                    opacity: [0, 1],
                    y: [0, -4, 10],
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  className="message error"
                >
                  {error}
                </motion.div>
              )}
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    ref={nameRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    ref={messageRef}
                    required
                  ></textarea>
                </div>
                <button className="btn big" type="button" onClick={sendMail}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
