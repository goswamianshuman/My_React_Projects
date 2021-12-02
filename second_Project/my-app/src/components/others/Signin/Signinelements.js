import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #B1560f;
`;

export const FormWrap = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  margin-left: 160px;
  margin-top: 70px;
  text-decoration: none;
  color: whitesmoke;
  font-weight: 700;
  font-size: 32px;
  font-family: arial;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #202020;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px orange;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: whitesmoke;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  font-family: arial;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-family: arial;
  color: whitesmoke;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: orange;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: whitesmoke;
  font-size: 20px;
  font-family: arial;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: whitesmoke;
  font-size: 14px;
  font-family: arial;
`;
