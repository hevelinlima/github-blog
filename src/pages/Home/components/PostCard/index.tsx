import { PostCardProps } from "../..";
import { CardContainer, CardHeader } from "./styles";

interface PostCardComponentProps {
  issue: PostCardProps;
}


export function PostCard({issue}:PostCardComponentProps){
  return(
    <CardContainer>
      <CardHeader>
        <h1>{issue.title}</h1>
        <span>{issue.created_at}</span>
      </CardHeader>
      <p>{issue.body}</p>
    </CardContainer>
  )
}