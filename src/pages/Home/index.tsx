import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { HomeContainer } from "./styles";


export function Home(){
  return(
    <div>
      <HomeContainer>
        <Profile />
        <SearchBar />
        <section>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </HomeContainer>
    </div>
  )
}