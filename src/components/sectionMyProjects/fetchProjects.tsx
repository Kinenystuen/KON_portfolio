import Loader from "../ui/Loader";
import { useApi } from "../../hooks/UseApi";

interface Projects {
  id: string;
  name: string;
  description: string;
  year: number;
  type: string;
  image: string;
  githubRepo: string;
  liveSite: string;
}

const FetchProjects: React.FC<{
  children: (data: Projects[]) => React.ReactNode;
}> = ({ children }) => {
  const { data, isLoading, isError } = useApi<Projects[]>(
    "/json/portfolioData.json"
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error fetching data...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return <>{children(data)}</>;
};

export default FetchProjects;
