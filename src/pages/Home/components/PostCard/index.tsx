
import { IssuesProps } from "../../../../contexts/ApiContext";
import { CardContainer, CardHeader } from "./styles";


export function PostCard({issue}: IssuesProps){
  return(
    <CardContainer href={`/post/${issue.number}`}>
      <CardHeader>
        <h1>{issue.title}</h1>
        <span>{issue.created_at}</span>
      </CardHeader>
      <p>{issue.body}</p>
    </CardContainer>
  )
}