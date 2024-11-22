import { useQuery } from "@tanstack/react-query";

export const useSignup = () => {
  return useQuery({
    queryKey: ["signup"],
    queryFn: async () => {
      const res = await fetch("https://654e2b17cbc3253557427706.mockapi.io/products");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    },
  });
};
