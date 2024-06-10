import { useContext } from "react";
import { ApiContext } from "../../contexts/ApiContext";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { HomeContainer } from "./styles";


export function Home(){
  const { issues } = useContext(ApiContext);
  return(
    <div>
      <HomeContainer>
        <Profile />
        <SearchBar />
        <section>
          {issues.map(issue => (
            <PostCard 
              key={issue.id} 
              issue={issue}
            />
          ))}
        </section>
      </HomeContainer>
    </div>
  )
}