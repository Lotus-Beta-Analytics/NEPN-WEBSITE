// import { queryKeys } from "../react-query/constants";
import { queryKeys } from "@/react-query/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios-instance";

async function postContactForm(payload?: any) {
  try {
    const res = await axiosInstance({
      url: "contact-form",
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

interface EmailResponse {
  success: boolean;
}

type EmailFormData = any;

export function useSendContact() {
  const queryClient = useQueryClient();

  const { mutate, isError, error, isSuccess, reset, isPending } = useMutation<
    EmailResponse,
    Error,
    EmailFormData
  >({
    mutationFn: (formData) => postContactForm(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.emails],
      });
    },
  });

  return { mutate, isError, error, isSuccess, reset, isPending };
}
