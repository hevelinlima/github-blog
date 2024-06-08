import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconLabelContainer } from "./styles"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ILabelProps{
  text: string;
  icon: IconProp;
}

export const IconLabel = ({text, icon}: ILabelProps) => {
  return(
    <IconLabelContainer>
      <p>{text}</p>
      <FontAwesomeIcon icon={icon} />
    </IconLabelContainer>
  )
}