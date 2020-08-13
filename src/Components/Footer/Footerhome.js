import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  margin-top: 4vw;
  background: #110011;
  display: flex;
  flex-direction: column;
`;
const Section = styled.div`
  width: 90%;
  color: #ffffff;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3vw;
  padding-bottom: 3vw;
  @media (min-width: 991px) {
    width: 92%;
    padding-right: 2.3vw;
    padding-left: 2.3vw;
  }
`;

const Footerhome = () => {
  return (
    <Footer>
      <Section>
        <strong>harshit</strong>
        <p style={{ fontSize: '12px' }}>
          The element is updated to reset the browser default font-style from
          italic to normal. line-height is also now inherited, and
          margin-bottom: 1rem has been added.s are for presenting contact
          information for the nearest ancestor (or an entire body of work).
          Preserve formatting by ending lines with{' '}
        </p>
      </Section>
      <div
        style={{
          width: '80%',
          height: '1px',
          background: '#ffffff',
          display: 'block',
          margin: 'auto',
        }}
      ></div>
      <Section>
        <strong>harshit</strong>
        <p style={{ fontSize: '12px' }}>
          The element is updated to reset the browser default font-style from
          italic to normal. line-height is also now inherited, and
          margin-bottom: 1rem has been added.s are for presenting contact
          information for the nearest ancestor (or an entire body of work).
          Preserve formatting by ending lines with{' '}
        </p>
      </Section>
      <div
        style={{
          width: '80%',
          height: '1px',
          background: '#ffffff',
          display: 'block',
          margin: 'auto',
        }}
      ></div>
      <Section>
        <strong>harshit</strong>
        <p style={{ fontSize: '12px' }}>
          The element is updated to reset the browser default font-style from
          italic to normal. line-height is also now inherited, and
          margin-bottom: 1rem has been added.s are for presenting contact
          information for the nearest ancestor (or an entire body of work).
          Preserve formatting by ending lines with{' '}
        </p>
      </Section>
    </Footer>
  );
};

export default Footerhome;
