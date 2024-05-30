import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-size: 21px;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>Om os</Title>
      <Paragraph>
     Vi er en passioneret gruppe af kreative sind, der brænder for at levere kvalitetsprodukter til vores kunder. Hos os handler det ikke kun om at sælge produkter, det handler om at skabe en unik og mindeværdig oplevelse for dig.

Vores sortiment omfatter en bred vifte af produkter, der spænder fra [kategori 1] til [kategori 2], og alt derimellem. Vi går ikke på kompromis med kvalitet, og vi stræber altid efter at tilbyde de nyeste trends og det bedste håndværk.
      </Paragraph>
      <Paragraph>
      Men vi er mere end bare et sted, hvor du kan købe produkter. Vi ønsker at opbygge et forhold til vores kunder og skabe et fællesskab af ligesindede individer, der deler vores lidenskab for kvalitet og æstetik. Vores mål er at inspirere, glæde og berige dine liv gennem vores produkter og vores engagement i at give en fremragende kundeoplevelse.

Uanset om du er på udkig efter den perfekte gave til en elsket, opdateringer til dit hjem eller en personlig forkælelse til dig selv, håber vi, at du vil finde det, du leder efter hos os. Tak fordi du besøger vores side, og vi ser frem til at hjælpe dig med at finde det perfekte produkt!
         </Paragraph>
    </AboutContainer>
  );
}

export default About;
