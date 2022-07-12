import styled from "styled-components";

// Usage: <Div flex column fills center scrolly wrap></Div>
export const Div = styled.div`
  display: ${(props) => props.flex ? "flex" : "block"};
  height: ${(props) => props.fills ? "100%" : props.card? "fit-content" : "fit-content"};
  width: ${(props) => props.fills ? "100%" : props.card? "fit-content" : "fit-content"};
  max-width: ${(props) => props.card? "50vw" : ""};
  flex-direction: ${(props) => props.column ? "column" : props.row ? "row" : "row"};
  flex-wrap: ${(props) => props.wrap ? "wrap" : "nowrap"};
  justify-content: ${(props) => props.centerchildren ? "center" : ""};
  align-items: ${(props) => props.centerchildren ? "center" : ""};
  align-self: ${(props) => props.center ? "center" : ""};
  overflow-x: ${(props) => props.scrollx ? "scroll" : "hidden"};
  overflow-y: ${(props) => props.scrolly ? "scroll" : "hidden"};
  text-align: ${(props) => props.centertext ? "center" : ""};
  `;
  // max-height: ${(props) => props.card? "50vh" : ""};

export const Fix = styled.div`
  display: block;
  position: fixed;
  top: ${(props) => props.lower ? "unset" : props.offset};
  bottom: ${(props) => props.lower && props.offsetBottom ? props.offsetBottom : props.lower ? props.offset : "unset"};
  left: ${(props) => props.offsetLeft ? props.offsetLeft : props.right ? "unset" : props.center ? "50%" : props.offset};
  right: ${(props) => props.right ? props.offset : "unset"};
  transform: ${(props) => props.center ? "translateX(-50%)" : ""};
`;

export const Cover = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const Img = styled.img`
  height: auto;
  width: ${(props) => props.small ? "2rem" : props.mid ? "2.5rem" : "3rem"};
`;

export const TextInput = styled.input`
font-family: var(--global-font);
  font-size: var(--font-size-heading);
  border-radius: var(--global-border-radius);
  border: 0;
  box-shadow: 0 0 0 1px #000000;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 1rem;
`;

// Usage: <Button onClick={() => {navigate('/screen')}}>
export const Button = styled.button`
  font-size: var(--font-size-body);
  font-family: var(--global-font);
  min-height: 50px;
  min-width: 164px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  padding: 1rem 0.5rem 1rem 0.5rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  color: ${(props) =>
    props.disabled ? "#a9a9a9" : "#000000"};
  box-shadow: 0 0 0 1px ${(props) =>
    props.disabled ? "#a9a9a9" : "#000000"};

  &:hover {
    background-color: rgb(226, 226, 226);
  }
  &:active {
    background-color: rgb(202, 202, 202);
    transform: scale(0.99);
  }
`;