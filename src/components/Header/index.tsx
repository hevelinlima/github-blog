import { HeaderContainer, IconLogo, LeftEffect, Rectangle, RightEffect } from "./styles";
import iconLogo from "../../assets/logo.svg"
import leftEffect from "../../assets/effect-left.svg"
import rightEffect from "../../assets/effect-right.svg"
import rectangle from "../../assets/rectangle.svg"

export function Header(){
  return(
    <HeaderContainer>
        <LeftEffect src={ leftEffect } alt="" />
        <IconLogo src={ iconLogo } alt="" />
        <RightEffect src={ rightEffect } alt="" />

        <Rectangle src={ rectangle } alt="" />
  
    </HeaderContainer>
  )
}