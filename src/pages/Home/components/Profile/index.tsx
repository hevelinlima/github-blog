import { Content, InfoContainer, LoadingContainer, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { IconWithText } from "../../../../components/IconWithText";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../../contexts/ApiContext";
import { Loading } from "../../../../components/Loading";


export function Profile(){
  const { profileData } = useContext(ApiContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  return(
    <ProfileContainer>
      {isLoading ? (
        <LoadingContainer>
          <Loading/>
        </LoadingContainer>
      ) : 
        <>
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
        </>
      }
     
    </ProfileContainer>
  )
}