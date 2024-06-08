import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconContainer } from "./styles"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IWithTextProps{
  icon: IconProp;
  text: string;
}

export const IconWithText = ({icon, text}: IWithTextProps) => {
  return(
    <IconContainer>
      <FontAwesomeIcon icon={icon} className="icon-custom" />
      <p>{text}</p>
    </IconContainer>
  )
}