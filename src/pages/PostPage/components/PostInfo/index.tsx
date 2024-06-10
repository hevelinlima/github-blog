import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoHeader, InfoIcons, PostInfoContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { IconWithText } from "../../../../components/IconWithText";
import { IssuesProps } from "../../../../contexts/ApiContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function PostInfo({issue}: IssuesProps){
  const issueDate = new Date(issue.created_at as string)
  const issueDateFormatted = formatDistanceToNow(issueDate, {
    locale: ptBR,
    addSuffix: true
  })
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
        <IconWithText icon={faCalendarDay} text={issueDateFormatted} />
        <IconWithText icon={faComment} text={`${issue.comments} comentários`} />
      </InfoIcons>
    </PostInfoContainer>
  )
}