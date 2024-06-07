import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Home(){
  return(
    <>
      <h1>HomePage</h1>
      <FontAwesomeIcon icon={faGithub} />
    </>
  )
}