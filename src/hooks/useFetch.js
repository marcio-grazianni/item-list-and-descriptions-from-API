import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(
  queryOptions = {
    start: 0,
    count: 100,
  }
) {
  // console.log(queryOptions);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { start, count } = queryOptions;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://public-rest32.bullhornstaffing.com/rest-services/7CRJLS/search/JobOrder?query=(isOpen:1)&fields=id,title,publishedCategory(id,name),customText4,address(city,state),salary,salaryUnit,employmentType,dateLastPublished,publicDescription&count=${count}&sort=-dateLastPublished&start=${start}`
        );
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [count, start]);

  return { data, error, loading };
}
