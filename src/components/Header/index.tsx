import { HeaderContainer, IconLogo, LeftEffect, LeftEllipse, Rectangle, RightEffect, RightEllipse } from "./styles";
import iconLogo from "../../assets/logo.svg"
import leftEffect from "../../assets/effect-left.svg"
import rightEffect from "../../assets/effect-right.svg"
import rectangle from "../../assets/rectangle.svg"
import leftEllipse from "../../assets/left-ellipse.svg"
import rightEllipse from "../../assets/right-ellipse.svg"

export function Header(){
  return(
    <HeaderContainer>
        <LeftEllipse src={ leftEllipse } />
        <LeftEffect src={ leftEffect } alt="" />
        <IconLogo src={ iconLogo } alt="" />
        <RightEffect src={ rightEffect } alt="" />
        <RightEllipse src={ rightEllipse } alt="" />

        <Rectangle src={ rectangle } alt="" />
    </HeaderContainer>
  )
}