import { useState } from "react";
import Header from "./Header";
import PostDetail from "./PostDetail";
import Posts from "./Posts";
import useFetch from "../hooks/useFetch";

const Home = () => {
  // Handle the Query Options
  const [queryOptions, setQueryOtions] = useState({
    start: 0,
    count: 100,
    end: 99,
  });

  // Data and loading of the request
  const { data, loading } = useFetch(queryOptions);
  // Take the job details
  const [jobDetails, setJobDetails] = useState();
  // Handle state about is details page is open or not
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [searchedValue, setSearchedValue] = useState();

  return (
    <div className="md:h-screen">
      <Header
        queryOptions={queryOptions}
        setSearchedValue={setSearchedValue}
        // setPostsData={setPostsData}
        data={data}
      />
      <div className="hidden md:flex minHeight">
        <Posts
          data={data}
          loading={loading}
          setQueryOtions={setQueryOtions}
          searchedValue={searchedValue}
          setIsDetailsOpen={setIsDetailsOpen}
          setJobDetails={setJobDetails}
          selectedJobTitle={jobDetails?.title}
          queryOptions={queryOptions}
        />
        <div className="flex-1">
          <PostDetail setJobDetails={setJobDetails} jobDetails={jobDetails} />
        </div>
      </div>
      <div className="md:hidden">
        {isDetailsOpen ? (
          <PostDetail
            setIsDetailsOpen={setIsDetailsOpen}
            jobDetails={jobDetails}
          />
        ) : (
          <Posts
            data={data}
            loading={loading}
            setQueryOtions={setQueryOtions}
            searchedValue={searchedValue}
            setIsDetailsOpen={setIsDetailsOpen}
            setJobDetails={setJobDetails}
            selectedJobTitle={jobDetails?.title}
            queryOptions={queryOptions}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
