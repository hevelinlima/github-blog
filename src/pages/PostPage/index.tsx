import { useEffect, useState } from "react";
import { PostInfo } from "./components/PostInfo";
import { PostPageContainer, PostPageContent } from "./styles";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { PostCardProps } from "../../contexts/ApiContext";

export function Post(){
  const { number } = useParams();
  const [issue, setIssue] = useState<PostCardProps | null>(null);

  useEffect(() => {
    async function fetchIssue() {
      try {
        const response = await api.get(`/repos/inaturalist/inaturalist/issues/${number}`);
        setIssue(response.data);
      } catch (error) {
        console.error('Error fetching issue:', error);
      }
    }
    fetchIssue();
  }, [number]);

  if (!issue) {
    return <div>Loading...</div>;
  }

  return(
    <>
      <div>
        <PostPageContainer>
          <PostInfo issue={issue} />
          <PostPageContent>
            <p>{issue.body}</p>
          </PostPageContent>
        </PostPageContainer>
      </div>
    </>
  )
}