import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  min-width:220px ;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid black transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  &:hover{
            background: white;
            color: black;
            border: 1px solid black;
            transition: 0.3s background ease-in;
        }
`;
export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
    background: black;
    border: 1px solid transparent;
    color: white;
}`