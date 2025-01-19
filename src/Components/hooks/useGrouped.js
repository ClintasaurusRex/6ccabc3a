import { useMemo } from "react";

// Groups and sorts calls based on active tab

export const useGrouped = (calls, activeTab) => {
  return useMemo(() => {
    // Shows unarchived calls in activity tab and archived calls in archive tab
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

        // Create a mew array if one doesnt exist
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(call);
        return acc;
      }, {});
  }, [calls, activeTab]); // << this re calculates wen calls or active tab changes
};
