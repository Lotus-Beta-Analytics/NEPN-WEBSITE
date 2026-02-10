// import { queryKeys } from "../react-query/constants";
import { axiosInstance } from "../axios-instance";
import { useQuery } from "@tanstack/react-query";

async function getAboutUs() {
  try {
    const res = await axiosInstance({
      url: "/about",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res?.data?.data;
  } catch (error) {}
}

export function useAbout() {
  const fallback = [];
  const { data = fallback, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: getAboutUs,
  });
  return { data, isLoading };
}
