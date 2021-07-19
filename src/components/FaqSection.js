import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "../components/toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={scrollReveal} animate={controls} ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem saepe iure pariatur fugiat qui odit.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Daily Schedule">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem saepe iure pariatur fugiat qui odit.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Different Payment Methods">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem saepe iure pariatur fugiat qui odit.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="What services do you offer?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem saepe iure pariatur fugiat qui odit.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
