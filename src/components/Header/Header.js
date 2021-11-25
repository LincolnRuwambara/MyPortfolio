import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCode } from "react-icons/di";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alighnItems: "center", color: "white", marginebotom:'20' }}>
          <DiCode size="3rem"  marginebotom="20" /> <Span>My Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/">
          <NavLink> Education</NavLink>
        </Link>
      </li>

      <li>
        <Link href="/">
          <NavLink>Working experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/">
          <NavLink>Why SovTech?</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://linkedin.com/in/lincoln-takudzwa-ruwambara-144a8b1a3">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href=" https://github.com/LincolnRuwambara">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
