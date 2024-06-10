import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoHeader, InfoIcons, PostInfoContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { IconWithText } from "../../../../components/IconWithText";
import { IssuesProps } from "../../../../contexts/ApiContext";

export function PostInfo({issue}: IssuesProps){
  return(
    <PostInfoContainer>
      <InfoHeader>
        <a href={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </a>
        <a href={issue.html_url} >
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
        </a> 
      </InfoHeader>
      <h1>{issue.title}</h1>
      <InfoIcons>
        <IconWithText icon={faGithub} text={issue.user.login} />
        <IconWithText icon={faCalendarDay} text={issue.created_at} />
        <IconWithText icon={faComment} text={`${issue.comments} comentários`} />
      </InfoIcons>
    </PostInfoContainer>
  )
}