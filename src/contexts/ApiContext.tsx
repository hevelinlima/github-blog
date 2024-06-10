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

export interface PostCardProps{
  id: string;
  body: string;
  created_at: string;
  number: number;
  title: string;
  user: { login: string };
  comments: number;
  html_url: string;
}

export interface IssuesProps{
  issue: PostCardProps
}

interface ApiContextType{
  profileData: ProfileDataProps;
  issues: PostCardProps[];
}

export const ApiContext = createContext({} as ApiContextType)

interface ApiProviderProps{
  children: ReactNode
}

export function ApiProvider({children}:ApiProviderProps){
  const [profileData, setProfileData] = useState<ProfileDataProps | null >(null)
  const [issues, setIssues] = useState<PostCardProps[]>([])

  // Get profileData
  useEffect(() => {
    api.get('/users/hevelinlima').then(response => {
      setProfileData(response.data)
    })
  }, [])

  //Get Issues data for the Home page
  useEffect(()=> {
    async function fetchIssues(){
      const response = await api.get('/repos/inaturalist/inaturalist/issues');
      setIssues(response.data)
    }
    fetchIssues();
  }, [])

  if (issues.length === 0){
    return <div>Issues not found!</div>
  }
  if (!profileData){
    return <div>No profile data found</div>
  }

  return(
    <ApiContext.Provider
      value={{ profileData, issues }}
    >
      {children}
    </ApiContext.Provider>
  )
}