import { useEffect, useState } from "react";
import { PostInfo } from "./components/PostInfo";
import { PostPageContainer, PostPageContent } from "./styles";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { PostCardProps } from "../../contexts/ApiContext";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Loading } from "../../components/Loading";

export function Post(){
  const { number } = useParams();
  const [issue, setIssue] = useState<PostCardProps | null>(null);

  useEffect(() => {
    async function fetchIssue() {
      const response = await api.get(`/repos/inaturalist/inaturalist/issues/${number}`);
      setIssue(response.data);
    }
    fetchIssue();
  }, [number]);

  if (!issue) {
    return <Loading />;
  }

  return(
    <>
      <div>
        <PostPageContainer>
          <PostInfo issue={issue} />
          <PostPageContent>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className="body-issue" >
              {issue.body}
            </ReactMarkdown>
          </PostPageContent>
        </PostPageContainer>
      </div>
    </>
  )
}