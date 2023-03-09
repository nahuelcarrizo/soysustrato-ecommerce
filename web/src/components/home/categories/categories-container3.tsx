import React, {useContext} from 'react'
import styled, {css} from 'styled-components'

import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext'
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const StyledCard = styled(Card)`
/*   min-width: 100px;
  min-height: 50px !important; */
`;

const StyledAccordion = styled(Accordion.Collapse)`

  &.collapsing {

  }

  &.collapse {

  }
`;
const CategoriesContainer = ({categories}) => {


    

  return (


     <Accordion defaultActiveKey="0">
      <StyledCard>
        <Card.Header>
          <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
        </Card.Header>
        <StyledAccordion eventKey="0">
          <Card.Body>Hello! I'm another body</Card.Body>
        </StyledAccordion>
      </StyledCard>
      <StyledCard>
        <Card.Header>
          <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
        </Card.Header>
        <StyledAccordion eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </StyledAccordion>
      </StyledCard>
      <StyledCard>
        <Card.Header>
          <ContextAwareToggle eventKey="2">Click me!</ContextAwareToggle>
        </Card.Header>
        <StyledAccordion eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </StyledAccordion>
      </StyledCard>
      <StyledCard>
        <Card.Header>
          <ContextAwareToggle eventKey="3">Click me!</ContextAwareToggle>
        </Card.Header>
        <StyledAccordion eventKey="3">
          <Card.Body>Hello! I'm another body</Card.Body>
        </StyledAccordion>
      </StyledCard>
    </Accordion> 
  );
}

export default CategoriesContainer;
