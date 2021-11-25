import React from "react";
import {DiReact, DiAndroid, DiTerminal } from "react-icons/di";
import { GrCertificate } from "react-icons/gr";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListTitle,
} from "./EducationStyles";

const Education = () => (
  <Section id="education">
    <SectionDivider />
    <DiTerminal size="7rem" />
    <SectionTitle>My Education</SectionTitle>
    <SectionText>
      <List>
        <ListItem>
          <ListTitle> Bsc Hon Computer Science</ListTitle>
        </ListItem>
      </List>
      {""}
      Through my academic journey, I applied a strong focus on building my
      software development and technical abilities. I am detail-oriented and
      meticulous when managing competing priorities within tight deadlines. I
      work best in roles where utilizing software development allows me to make
      a positive impact while using creative problem-solving to resolve issues
      and achieve goals.{""}
      <List>
        <ListContainer>
          <ListItem>
            <DiAndroid size="7rem" />
            <ListTitle>Certificates</ListTitle>
            <ul>
              <li>
                Certificate of Programming in Android with Tree House 2018.
              </li>
              <br />

              <li>
                Certificate of Programming in Java with Tree House 2018
                Certificate
              </li>
              <br />
              <li>Business Basics with Business Ubuntu 2018 </li>
            </ul>
          </ListItem>
        </ListContainer>
      </List>
      While doing a certification course with Tree House I got hands-on
      experience in developing Android applications using java. I have also done
      personal projects using java to further enhance my understanding in java
      programming language, which are on my GitHub profile
    </SectionText>
  </Section>
);

export default Education;
