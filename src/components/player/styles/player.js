import styled from "styled-components";

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 1;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: " ";
    height: 22px;
    width: 2px;
    background-color: white;
  }

  &:hover {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  background-color: #f582ae;
  border-radius: 5px;
  border-color: transparent;
  width: 150px;
  height: 45px;
  font-weight: bold;
  color: #001858;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  &:hover {
    transform: scale(1.05);
    background-color: #e37ba2;
  }
`;
