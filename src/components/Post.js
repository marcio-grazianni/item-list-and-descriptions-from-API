import { calculateDaysDifference } from "../services/services";

const Post = ({
  postItem,
  setJobDetails,
  selectedJobTitle,
  setIsDetailsOpen,
}) => {
  const { title, salary, address, dateLastPublished, salaryUnit } = postItem;
  return (
    <div
      onClick={() => {
        setJobDetails(postItem);
        setIsDetailsOpen(true);
      }}
      className={`p-4 space-y-2 cursor-pointer group duration-300 border-b border-slate-100 hover:bg-slate-100 rounded-xl mx-2 ${
        selectedJobTitle === title && "bg-slate-100"
      }`}
    >
      <div>
        <h1
          className={`text-[#4e9090] font-semibold group-hover:underline text-xl ${
            selectedJobTitle === title && " underline "
          }`}
        >
          {title}
        </h1>
      </div>
      <div>
        <h3>
          {address?.city}, {address?.state}
        </h3>
        <h3>
          ${salary} {salaryUnit || "a year"}
        </h3>
      </div>
      <h5>
        Posted {dateLastPublished && calculateDaysDifference(dateLastPublished)}{" "}
        days ago
      </h5>
    </div>
  );
};

export default Post;
