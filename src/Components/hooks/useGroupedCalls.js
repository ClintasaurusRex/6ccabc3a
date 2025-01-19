import { useMemo } from "react";

export const useGroupedCalls = (calls) => {
  return useMemo(() => {
    return calls
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .reduce((acc, call) => {
        const date = new Date(call.created_at).toLocaleDateString([], {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(call);
        return acc;
      }, {});
  }, [calls]);
};
