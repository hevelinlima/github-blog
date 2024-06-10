import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ProfileDataProps{
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  location: string;
  login: string;
  name: string;
}

interface ApiContextType{
  profileData: ProfileDataProps;
}

export const ApiContext = createContext({} as ApiContextType)

interface ApiProviderProps{
  children: ReactNode
}

export function ApiProvider({children}:ApiProviderProps){
  const [profileData, setProfileData] = useState<ProfileDataProps | null >(null)

  useEffect(() => {
    api.get('/users/hevelinlima').then(response => {
      setProfileData(response.data)
    })
  }, [])

  if (!profileData){
    return <div>No profile data found</div>
  }

  return(
    <ApiContext.Provider
      value={{ profileData }}
    >
      {children}
    </ApiContext.Provider>
  )
}