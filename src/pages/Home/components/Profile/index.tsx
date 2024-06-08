import { Content, InfoContainer, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { IconWithText } from "../../../../components/IconWithText";

export function Profile(){
  return(
    <ProfileContainer>
      <img src="https://github.com/hevelinlima.png" alt="" />
      <Content>
        <h1>Hévelin Cristina</h1> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, accusamus?</p>

        <InfoContainer>
          <IconWithText icon={faGithub} text="hevelinlima" />
          <IconWithText icon={faBuilding} text="Teresina, PI" />
          <IconWithText icon={faUserGroup} text="4 seguidores" />
        </InfoContainer>
      </Content>
      <a href={"/post"}>
        <p>GITHUB</p>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
      </a>
    </ProfileContainer>
  )
}