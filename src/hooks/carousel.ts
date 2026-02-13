// import { queryKeys } from "../react-query/constants";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios-instance";

async function getCarousel() {
  try {
    const res = await axiosInstance({
      url: "slider",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res?.data.data);
    return res?.data?.data;
  } catch (error) {}
}

export function useCarousel() {
  const fallback: any = [];
  const { data = fallback, isLoading } = useQuery({
    queryKey: ["carousel"],
    queryFn: getCarousel,
  });
  return { data, isLoading };
}
