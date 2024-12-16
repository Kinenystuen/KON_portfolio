import Loader from "../ui/Loader";
import { useApi } from "../../hooks/UseApi";
import ErrorMessage from "../shared/ErrorMessage";
import P from "../shared/Typography/P";
import { Link } from "react-router-dom";
import Button from "../shared/Button/Button";

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
  const { data, isLoading, isError, errorMessage } = useApi<Projects[]>(
    `${import.meta.env.BASE_URL}json/portfolioData.json`
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <ErrorMessage message="Data not found">
        <P>{errorMessage}</P>
        <Link to="/">
          <Button className="my-8 px-4 inline-block">Go to homepage</Button>
        </Link>
      </ErrorMessage>
    );
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return <>{children(data)}</>;
};

export default FetchProjects;
