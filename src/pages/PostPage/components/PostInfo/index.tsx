import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoHeader, InfoIcons, PostInfoContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { IconWithText } from "../../../../components/IconWithText";

export function PostInfo(){
  return(
    <PostInfoContainer>
      <InfoHeader>
        <a href="">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>
        <a href="">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
        </a> 
      </InfoHeader>
      <h1>JavaScript data types and data structures</h1>
      <InfoIcons>
        <IconWithText icon={faGithub} text="hevelinlima" />
        <IconWithText icon={faCalendarDay} text="Há 1 dia" />
        <IconWithText icon={faComment} text="7 comentários" />
      </InfoIcons>
    </PostInfoContainer>
  )
}