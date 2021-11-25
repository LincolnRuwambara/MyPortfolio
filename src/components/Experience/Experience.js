import React from "react";
import { FiActivity } from "react-icons/fi";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ExperienceStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { experience } from "../../constants/constants";

const Experience = () => (
  <Section nopadding id="experience">
    <SectionDivider />
    < FiActivity size="7rem" />
    <SectionTitle main>Working Experience</SectionTitle>
    <GridContainer>
      {experience.map(({ id, title, description, tags }) => (
        <BlogCard key={experience.id}>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br />
          <div>
            <TitleContent> Skills Obtained</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Experience;
