import styled from "styled-components";

export const Title = styled.p`
  font-size: 24px;
  color: #172c66;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === "row" ? "row" : "column")};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: white;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: white;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const Image = styled.img`
  border-radius: 6px;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  -webkit-box-shadow: 2px 7px 15px 2px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 2px 7px 15px 2px rgba(0, 0, 0, 0.34);
  box-shadow: 2px 7px 15px 2px rgba(0, 0, 0, 0.34);
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1000px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: #172c66;
  font-weight: ${({ fontWeight }) => {
    return fontWeight === "bold" ? "bold" : "normal";
  }};
  margin: 0;

  @media (max-width: 800px) {
    line-height: 22px;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  mix-blend-mode: soft-light;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #8bd3dd;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: 1000px;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #8bd3dd;
  background-blend-mode: soft-light;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? "red" : "green")};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;

export const RatingScore = styled.span`
  margin-left: 6px;
  margin-right: 4px;
  color: #001858;
  font-size: 18px;
`;

export const RatingCompany = styled.span`
  color: #172c66;
  font-size: 8px;
  /* align-self: flex-end; */
  letter-spacing: 0.05em;
`;
