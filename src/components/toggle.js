import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <StyledToggle layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div layout className="faq-line"></div>
    </StyledToggle>
  );
};

const StyledToggle = styled(motion.div)`
  cursor: pointer;
  h4 {
    padding: 2rem 0rem;
  }
`;

export default Toggle;
