import { useState, useEffect, useMemo } from "react";

const useApi = () => {
  // State management for call data, loading and error
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memo calc of non-archived missed calls - needs a re look
  const missedCallsCount = useMemo(() => {
    return calls.filter((call) => call.call_type === "missed" && !call.is_archived).length;
  }, [calls]);

  // Fetches all the calls from the API and updates the calls state :)
  const fetchCalls = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://aircall-api.onrender.com/activities");
      const data = await response.json();
      setCalls(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Toggles the archive status of a single call by ID
  const toggleArchive = async (callId) => {
    try {
      const call = calls.find((c) => c.id === callId);
      await fetch(`https://aircall-api.onrender.com/activities/${callId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_archived: !call.is_archived }),
      });
      fetchCalls();
    } catch (error) {
      setError(error.message);
    }
  };

  // Archives all non-archived calls in the list
  const archiveAll = async () => {
    const promises = calls
      .filter((call) => !call.is_archived)
      .map((call) => toggleArchive(call.id));
    await Promise.all(promises);
    fetchCalls();
  };

  // Unarchives all archived calls in the list
  const unarchiveAll = async () => {
    const promises = calls.filter((call) => call.is_archived).map((call) => toggleArchive(call.id));
    await Promise.all(promises);
    fetchCalls();
  };

  // Initial fetch of calls when component mounts :)
  useEffect(() => {
    fetchCalls();
  }, []);

  return {
    calls,
    loading,
    error,
    fetchCalls,
    toggleArchive,
    archiveAll,
    unarchiveAll,
    missedCallsCount,
  };
};

export default useApi;
