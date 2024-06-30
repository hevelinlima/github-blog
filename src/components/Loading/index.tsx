import circleNotch from "../../assets/circle-notch.svg"
import { SkeletonContainer } from "./styles";


export function Loading(){
  return(
    <SkeletonContainer>
      <img src={ circleNotch } className="spinner" />
    </SkeletonContainer>
  )
}