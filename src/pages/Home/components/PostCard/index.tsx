import { formatDistanceToNow } from "date-fns";
import { IssuesProps } from "../../../../contexts/ApiContext";
import { CardContainer, CardHeader } from "./styles";
import { ptBR } from "date-fns/locale";


export function PostCard({issue}: IssuesProps){
  const issueDate = new Date(issue.created_at as string)
  const issueDateFormatted = formatDistanceToNow(issueDate, {
    locale: ptBR,
    addSuffix: true
  })
  return(
    <CardContainer href={`/post/${issue.number}`}>
      <CardHeader>
        <h1>{issue.title}</h1>
        <span>{issueDateFormatted}</span>
      </CardHeader>
      <p>{issue.body}</p>
    </CardContainer>
  )
}