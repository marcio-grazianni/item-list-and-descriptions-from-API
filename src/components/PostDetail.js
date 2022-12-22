import { BiArrowBack } from "react-icons/bi";
import { calculateDaysDifference } from "../services/services";

const PostDetail = ({ jobDetails, setIsDetailsOpen }) => {
  // If no job is selected
  if (!jobDetails) {
    return (
      <div className="minHeight flex justify-center items-center">
        <h3>Please Select Job Post to see the the details</h3>
      </div>
    );
  }

  // Destructuring
  const {
    salary,
    salaryUnit,
    address,
    employmentType,
    publicDescription,
    dateLastPublished,
  } = jobDetails;

  return (
    <div className=" max-h-[100%] overflow-y-auto">
      <div
        onClick={() => {
          setIsDetailsOpen(false);
        }}
        className="mx-4 py-4 md:hidden flex items-center space-x-4 cursor-pointer"
      >
        <BiArrowBack />
        <p>Back</p>
      </div>
      <div className="border-b-2 border-[#4e9090] w-full p-6">
        <h1 className="font-semibold text-2xl underline text-[#4e9090]">
          {jobDetails.title}
        </h1>

        <div>
          <h3>
            {address.city}, {address.state}
          </h3>
          <h3>
            ${salary} {salaryUnit || " a year "}
          </h3>
        </div>
      </div>

      <div className="border-b-2 border-[#4e9090] w-full p-6 space-y-2">
        <h1 className="font-semibold text-xl text-[#4e9090]">Job Details</h1>

        <div>
          <h3 className="font-bold text-lg">Salary</h3>

          <h4 className="text-sm">
            ${salary} {salaryUnit || " a year "}
          </h4>
        </div>

        <div>
          <h3 className="font-bold text-lg">Type</h3>
          <h4 className="text-sm">{employmentType}</h4>
        </div>

        <div>
          <h3 className="font-bold text-lg">Posted</h3>
          <h4 className="text-sm">
            {dateLastPublished && calculateDaysDifference(dateLastPublished)}{" "}
            days ago
          </h4>
        </div>
      </div>

      <div className="border-b-2 border-[#4e9090] w-full p-6">
        <h1 className="font-semibold text-xl text-[#4e9090]">
          Job Description
        </h1>

        <div dangerouslySetInnerHTML={{ __html: publicDescription }} />
      </div>
    </div>
  );
};

export default PostDetail;
