import { useContext, useEffect } from "react";
import { SearchBarInfo, SearchBarContainer } from "./styles";
import { ApiContext } from "../../../../contexts/ApiContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  query: z.string().nonempty("A busca não pode estar vazia")
})

type SearchInput = z.infer<typeof searchSchema>

export function SearchBar() {
  const { issues, searchIssues } = useContext(ApiContext);
  
  const lastIssueNumber = issues.length > 0 ? issues[issues.length - 1].number : 0;

  const { register, watch } = useForm<SearchInput>({
    resolver: zodResolver(searchSchema)
  });

  const query = watch("query");

  useEffect(() => {
    searchIssues(query || '');
  }, [query, searchIssues]);

  return (
    <SearchBarContainer>
      <SearchBarInfo>
        <h2>Publicações</h2>
        <span>{`${lastIssueNumber} publicações`}</span>
      </SearchBarInfo>
      <input 
        type="text" 
        placeholder="Buscar conteúdo"
        id="search"
        {...register("query")}
      />
    </SearchBarContainer>
  )
}
     