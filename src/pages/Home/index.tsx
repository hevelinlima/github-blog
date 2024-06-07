import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { HomeContainer } from "./styles";


export function Home(){
  return(
    <div>
      <HomeContainer>
        <Profile />
        <SearchBar />
      </HomeContainer>
    </div>
  )
}