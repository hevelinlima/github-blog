import { useEffect, useState } from "react";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { HomeContainer } from "./styles";
import { api } from "../../lib/axios";

export interface PostCardProps{
  id: string;
  title: string;
  body: string;
  created_at: string;
}


export function Home(){
  const [issues, setIssues] = useState<PostCardProps[]>([])

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

  return(
    <div>
      <HomeContainer>
        <Profile />
        <SearchBar />
        <section>
          {issues.map(issue => (
            <PostCard key={issue.id} issue={issue} />
          ))}
        </section>
      </HomeContainer>
    </div>
  )
}