import { AlignedCenterContainer, BodyCopyRegularSmall, StyledH3 } from '../../config/global-styled-components';

import Accordion from './cart/accordion/accordion';
import Button from './secondary-button';
import FaqJson from '../../config/faq-conf.json';
import React from 'react';
import { colors } from '../../config/global-styles';
import { device } from '../../config/device';
import styled from 'styled-components';

const BackgroundContainer = styled.section`
 background-color: ${colors.ui.grey5percent}
`;

const FaqContainer = styled(AlignedCenterContainer)`
  max-width: 1600px;
  margin: auto;
  padding: 4rem 3rem 2.5rem 3rem;

  @media ${device.large} {
    text-align: left;
    padding: 6rem 9rem 7rem 9rem;
  }
`;

const FaqButtonContainer = styled(AlignedCenterContainer)`
  margin-top: 2.5rem;

  @media ${device.large} {
    margin-top: 7rem;
  }
`;

const FaqTitle = styled(StyledH3)`
  margin-bottom: 2.5rem;
  font-size: 1.7rem;
  @media ${device.large} {
    margin-bottom: 4rem;
    margin-top: 0;
  }
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;

  @media ${device.large} {
    width: 48%;
  }
`;

const createAccordionContent = (question: string, answer: string, index: number, isHidden: boolean) => {
  return (
    <StyledAccordion
      title={question}
      key={index}
      index={index}
      initialHiddenStatus={isHidden}
      isBold={true}
      makeStatic={true}
    >
      <BodyCopyRegularSmall>{answer}</BodyCopyRegularSmall>
    </StyledAccordion>
  );
};

const AccordionsContainer = styled.div`
  @media ${device.large} {
    display: none;
  }
`;

const AccordionsDesktopContainer = styled.div`
  display: none;
  @media ${device.large} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Faq = ({ isDarkBackgroundColor }: { isDarkBackgroundColor?: boolean }) => {
  return (
    <BackgroundContainer isDark={isDarkBackgroundColor}>
      <FaqContainer>
        <FaqTitle>Preguntas frecuentes</FaqTitle>
        <AccordionsContainer>
          {FaqJson.data.map((question, index) =>
            createAccordionContent(question.question, question.answer, index, question.isHidden)
          )}
        </AccordionsContainer>
        <AccordionsDesktopContainer>
          {FaqJson.data.map((question, index) =>
            createAccordionContent(question.question, question.answer, index, false)
          )}
        </AccordionsDesktopContainer>
      </FaqContainer>
    </BackgroundContainer>
  );
};

export default Faq;
