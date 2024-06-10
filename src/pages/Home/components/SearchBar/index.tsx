import { useContext } from "react";
import { SearchBarInfo, SearchBarContainer } from "./styles";
import { ApiContext } from "../../../../contexts/ApiContext";

export function SearchBar(){
  const {issues} = useContext(ApiContext)
  const lastIssueNumber = issues.length > 0 ? issues[issues.length - 1].number : null;
  return(
    <SearchBarContainer>
      <SearchBarInfo>
        <h2>Publicações</h2>
        <span>{`${lastIssueNumber} publicações`}</span>
      </SearchBarInfo>
      <input type="text" placeholder="Buscar conteúdo"/>
    </SearchBarContainer>
  )
}