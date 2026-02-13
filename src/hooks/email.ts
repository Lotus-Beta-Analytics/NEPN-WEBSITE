// import { queryKeys } from "../react-query/constants";
import { queryKeys } from "@/app/react-query/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios-instance";

async function postEmails(payload?: any) {
  try {
    const res = await axiosInstance({
      url: "email-submission",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    });

    console.log(res?.data?.data);
    return res?.data?.data;
  } catch (error) {
    console.error("Error fetching slider:", error);
    throw error;
  }
}

// Define what your API returns and what it takes in
interface EmailResponse {
  success: boolean;
}

type EmailFormData = any;

export function useSendEmails() {
  const queryClient = useQueryClient();

  const { mutate, isError, error, isSuccess, reset } = useMutation<
    EmailResponse,
    Error,
    EmailFormData
  >({
    mutationFn: (formData) => postEmails(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.emails],
      });
    },
  });

  return { mutate, isError, error, isSuccess, reset };
}
