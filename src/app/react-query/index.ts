import { QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function queryErrorHandler(error: any) {
  // const id = "react-query-error";
  const title =
    error instanceof Error ? error.message : "error connecting to server";

  toast.error(title);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      gcTime: 90000,
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    },
  },
});
