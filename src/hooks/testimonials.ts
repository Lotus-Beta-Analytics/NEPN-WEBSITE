// import { queryKeys } from "../react-query/constants";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios-instance";

async function getTestimonials() {
  try {
    const res = await axiosInstance({
      url: "testimonial",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res?.data?.testimonials, "boy");
    return res?.data?.testimonials;
  } catch (error) {}
}

export function useGetTestimonials() {
  const fallback: any = [];
  const { data = fallback, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });
  return { data, isLoading };
}
