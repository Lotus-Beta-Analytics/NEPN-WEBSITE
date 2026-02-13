// import { queryKeys } from "../react-query/constants";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios-instance";

async function getFAQ() {
  try {
    const res = await axiosInstance({
      url: "faq",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res?.data.data);
    return res?.data?.data;
  } catch (error) {}
}

export function useFAQ() {
  const fallback: any = [];
  const { data = fallback, isLoading } = useQuery({
    queryKey: ["faq"],
    queryFn: getFAQ,
  });
  return { data, isLoading };
}
