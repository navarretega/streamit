import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
  margin-top: 100px;
`;

export const Error = styled.div`
  font-size: 14px;
  margin: 0 0 16px;
  color: #e14444;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #001858;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.h1`
  color: #172c66;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.h2`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: #001858;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #f0e6d0;
  border-radius: 4px;
  border: 0;
  color: #172c66;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #f582ae;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px;
  padding: 16px;
  border: 0;
  color: #001858;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
