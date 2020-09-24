import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";
import bk from "../../../assets/images/misc/home-bg.jpg";

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${({ srcImg }) => (srcImg ? srcImg : bk)}) top left / cover no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Gradient = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* background: linear-gradient(to bottom, transparent 0%, transparent 20%, #fef6e4); */
  /* background: linear-gradient(to left, transparent, transparent 25%, transparent 75%, transparent 100%); */
  background: radial-gradient(circle closest-side, transparent 0%, transparent 60%, #fef6e4);
  /* background: linear-gradient(to top, transparent 0%, transparent 80%, #fef6e4),
    linear-gradient(to bottom, transparent 20%, transparent 70%, #fef6e4); */
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Link = styled.p`
  color: #001858;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #f582ae;
  width: 84px;
  height: fit-content;
  color: #001858;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #e77ca5;
  }
`;

export const Logo = styled.img`
  height: 41px;
  width: 100px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 82px;
    width: 200px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: #172c66;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: #001858;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #f582ae;
  color: #001858;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 200px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  /* transition: background-color: 0.5s ease; */

  &:hover {
    background: #e37ba2;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: none;

  img {
    /* filter: brightness(0) invert(1); */
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: #f0e6d0;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0px")};
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border-radius: 5px;
  border-color: transparent;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #f0e6d0;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
