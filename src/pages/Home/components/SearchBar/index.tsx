import { SearchBarInfo, SearchBarContainer } from "./styles";

export function SearchBar(){
  return(
    <SearchBarContainer>
      <SearchBarInfo>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </SearchBarInfo>
      <input type="text" placeholder="Buscar conteúdo"/>
    </SearchBarContainer>
  )
}