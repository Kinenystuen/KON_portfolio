import React from "react";
import Loader from "../ui/Loader";
import { useApi } from "../../hooks/UseApi";

interface Skill {
  id: string;
  name: string;
  image: string;
  link: string;
}

const FetchKnowledge: React.FC<{
  children: (data: Skill[]) => React.ReactNode;
}> = ({ children }) => {
  const { data, isLoading, isError } = useApi<Skill[]>("/json/skillsData.json");

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

export default FetchKnowledge;
