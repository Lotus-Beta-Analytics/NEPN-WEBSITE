// import { queryKeys } from "../react-query/constants";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios-instance";

export async function getNews() {
  try {
    const res = await axiosInstance({
      url: "posts",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res?.data?.posts, "boy");
    return res?.data?.posts;
  } catch (error) {}
}

export function useGetNews() {
  const fallback: any = [];
  const { data = fallback, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });
  return { data, isLoading };
}
