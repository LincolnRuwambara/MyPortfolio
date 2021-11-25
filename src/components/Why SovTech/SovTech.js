 import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './SovTechStyles';
import { FiActivity } from "react-icons/fi";
import { FaSnowman } from "react-icons/fa";

const data = [
  {
    number: 1,
    text: "There is a saying by Susan Wojcicki that 'Learning to code makes kids feel empowerd, creative and confident', hence this oportunity willl greately help me to gain confidence in my abilities as an aspiring programmer at the same time empowering me to get the best of my abilities",
  },
  {
    number: 2,
    text: "SovTech offers exceptional software built by an elite team of passionate tech experts. This will created a graet opportunity for me to learn from the SovTeach proffesionals and get mentorship to reach my proffesional goals",
  },
  {
    number: 3,
    text: "The #GoogleIt Spex is the main reason why i want to join the SovTech Team. It shows that there is room for growth and learning new technologies when you are part of the SovTech Team ",
  },

  {
    number: 4,
    text: " As a recent graduage, this oportunity will give me the chance to improve my coding skills as a programmer ",
  },
];

const SovTech = () => (
  <Section>
    <SectionDivider />
    <br />
    <FaSnowman size="7rem" />
    <SectionTitle> Why I want to be a developer at SovTech</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key="index">
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default SovTech;
