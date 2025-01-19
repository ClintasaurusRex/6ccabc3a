import { useState, useEffect } from "react";

const useApi = () => {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const archiveAll = async () => {
    const promises = calls
      .filter((call) => !call.is_archived)
      .map((call) => toggleArchive(call.id));
    await Promise.all(promises);
    fetchCalls();
  };

  const unarchiveAll = async () => {
    const promises = calls.filter((call) => call.is_archived).map((call) => toggleArchive(call.id));
    await Promise.all(promises);
    fetchCalls();
  };

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
  };
};

export default useApi;
//   const [missed, setMissedCall] = useState(null);
//   try {
//     const res = await fetch(`https://aircall-api.onrender.com/activities`);
//     const data = await res.json();
//     if (!data) throw new Error(data.message);
//     setMissedCall(data);
//   } catch (err) {
//     console.log(err.message);
//   } finally {
//     console.log("loaded");
//   }
//   return { missed, setMissedCall };
// };
// export default useApi;
