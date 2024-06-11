import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ProfileDataProps {
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  location: string;
  login: string;
  name: string;
}

export interface PostCardProps {
  id: string;
  body: string;
  created_at: string;
  number: number;
  title: string;
  user: { login: string };
  comments: number;
  html_url: string;
}

export interface IssuesProps {
  issue: PostCardProps;
}

interface ApiContextType {
  profileData: ProfileDataProps;
  issues: PostCardProps[];
  fetchIssues: () => Promise<void>;
  searchIssues: (query: string) => void;
}

export const ApiContext = createContext({} as ApiContextType);

interface ApiProviderProps {
  children: ReactNode;
}

export function ApiProvider({ children }: ApiProviderProps) {
  const [profileData, setProfileData] = useState<ProfileDataProps | null>(null);
  const [initialIssues, setInitialIssues] = useState<PostCardProps[]>([]);
  const [issues, setIssues] = useState<PostCardProps[]>([]);

  // Get profileData
  useEffect(() => {
    api.get('/users/hevelinlima').then((response) => {
      setProfileData(response.data);
    });
  }, []);

  // Get Issues data for the Home page
  async function fetchIssues() {
    const response = await api.get('/repos/inaturalist/inaturalist/issues');
    setInitialIssues(response.data);
    setIssues(response.data);
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  // Search issues
  function searchIssues(query: string) {
    if (!query) {
      setIssues(initialIssues);
      return;
    }

    const filteredIssues = initialIssues.filter((issue) =>
      issue.title.toLowerCase().includes(query.toLowerCase())
    );

    setIssues(filteredIssues);
  }

  if (issues.length === 0) {
    return <div>Issue not found</div>;
  }
  if (!profileData) {
    return ;
  }

  return (
    <ApiContext.Provider
      value={{ profileData, issues, fetchIssues, searchIssues }}
    >
      {children}
    </ApiContext.Provider>
  );
}