import { Content, InfoContainer, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { IconWithText } from "../../../../components/IconWithText";
import { useContext } from "react";
import { ApiContext } from "../../../../contexts/ApiContext";


export function Profile(){
  const { profileData } = useContext(ApiContext)
  return(
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />
      <Content>
        <h1>{profileData.name}</h1> 
        <p>{profileData.bio}</p>

        <InfoContainer>
          <IconWithText icon={faGithub} text={profileData.login} />
          <IconWithText icon={faBuilding} text={profileData.location} />
          <IconWithText icon={faUserGroup} text={`${profileData.followers} seguidores`} />
        </InfoContainer>
      </Content>
      <a href={profileData.html_url}>
        <p>GITHUB</p>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
      </a>
    </ProfileContainer>
  )
}