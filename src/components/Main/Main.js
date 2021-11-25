import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './MainStyles';

const Main = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Lincoln Takudzwa Ruwambara
      </SectionTitle>
      <SectionText>
        I am a young man who is focused on personal development through learning
        and channeling his skills towards becoming an IT professional. , I
        strive to create usable and polished products through passionate and
        deliberate design.
      </SectionText>
    </LeftSection>
  </Section>
);

  
export default Main;