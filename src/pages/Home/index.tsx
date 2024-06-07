import { Profile } from "./components/Profile";
import { HomeContainer } from "./styles";


export function Home(){
  return(
    <div>
      <HomeContainer>
        <Profile />
      
      </HomeContainer>
    </div>
  )
}