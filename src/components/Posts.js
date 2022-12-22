import { useEffect, useState, memo } from "react";
import Loader from "./Loader";
import Post from "./Post";

const Posts = ({
  data,
  setJobDetails,
  selectedJobTitle,
  setIsDetailsOpen,
  searchedValue,
  setQueryOtions,
  queryOptions,
  loading,
}) => {
  const [tempData, setTempData] = useState([]);
  const [postsData, setPostsData] = useState([]);

  // Restructuring the response
  useEffect(() => {
    let newData;
    if (searchedValue === undefined) {
      if (postsData?.length > 0) {
        newData = [...postsData, ...data?.data];
      } else {
        newData = data?.data;
      }

      setPostsData(newData);
      setTempData(newData);
    }

    if (searchedValue) {
      const filteredData = tempData?.filter(({ title }) =>
        title.toLowerCase().includes(searchedValue.toLowerCase())
      );
      setPostsData(filteredData);

      return;
    } else if (searchedValue === "") {
      setPostsData(tempData);
      setTempData(tempData);
      return;
    }
  }, [searchedValue, data?.data]);

  return (
    <div className="  md:w-1/3 md:border-r-2 border-[#4e9090] max-h-[100%] overflow-y-auto ">
      <h1 className="font-semibold text-[#4e9090] text-xl text-center py-2  sticky top-0 left-0 bg-white">
        {postsData?.length} {searchedValue && searchedValue} Jobs
      </h1>
      <div className="space-y-2">
        {postsData ? (
          <div>
            {postsData?.map((postItem) => (
              <>
                <Post
                  setIsDetailsOpen={setIsDetailsOpen}
                  selectedJobTitle={selectedJobTitle}
                  key={postItem.id}
                  setJobDetails={setJobDetails}
                  postItem={postItem}
                />
              </>
            ))}
            <div>{loading && <Loader />}</div>

            <button
              onClick={() => {
                setQueryOtions({
                  start: queryOptions?.count + queryOptions?.start,
                  count: queryOptions.count,
                });
              }}
              className="rounded-md py-2 px-4 mx-auto block my-3 text-[#FFFFFF] bg-[#4e9090]"
            >
              Load More
            </button>
          </div>
        ) : (
          <div>
            {loading && (
              <div>
                <Loader />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Posts);
