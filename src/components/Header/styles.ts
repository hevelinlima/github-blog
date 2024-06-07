import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props)=> props.theme["base-profile"]};

  height: 18.5rem;
  position: relative;
  overflow: hidden;

  z-index: -1;
`

export const IconLogo = styled.img`
  position: absolute;
  width: 9.25rem;
  height: 6.125rem;
  left: calc(50% - (9.25rem / 2));
  top: 4rem;
`

export const LeftEffect = styled.img`
  position: absolute;
  width: 25.5rem;
  height: 11.75rem;
  left: 0;
  top: 4.375rem;
`

export const RightEffect = styled.img`
  position: absolute;
  width: 23.188rem;
  height: 14.75rem;
  right: 0;
  top: 1.875rem;
`
export const Rectangle = styled.img`
  position: absolute;
  width: 89rem;
  left: 50%;
  transform: translate(-50%) ;
  top: 10rem;
`
