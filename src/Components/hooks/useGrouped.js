import { useMemo } from "react";

export const useGrouped = (calls, activeTab) => {
  return useMemo(() => {
    const displayCalls = calls.filter((call) => {
      const filtered = activeTab === "activity" ? !call.is_archived : call.is_archived;
      return filtered;
    });

    return displayCalls
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
  }, [calls, activeTab]);
};
