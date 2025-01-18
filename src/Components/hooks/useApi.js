import { useState, useEffect } from "react";

const useApi = () => {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://aircall-api.onrender.com/activities");
        const data = await response.json();
        setCalls(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCalls();
  }, []);

  const missedCalls = calls.filter((call) => call.call_type === "missed");

  return {
    calls,
    missedCalls,
    loading,
    error,
    setCalls,
  };
};

// const useApi = async () => {
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
export default useApi;
