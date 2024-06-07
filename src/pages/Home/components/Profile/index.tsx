import { Content, InfoContainer, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";

export function Profile(){
  return(
    <ProfileContainer>
      <img src="https://github.com/hevelinlima.png" alt="" />
      <Content>
        <h1>Hévelin Cristina</h1> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, accusamus?</p>

        <InfoContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} className="icon-custom" />
            <p>hevelinlima</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} className="icon-custom" />
            <p>Teresina, PI</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} className="icon-custom"/>
            <p>4 seguidores</p>
          </div>
        </InfoContainer>
      </Content>
      <a href="">
        GITHUB
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
      </a>
    </ProfileContainer>
  )
}