import { FaPhoneVolume, FaPhone, FaPhoneSlash } from "react-icons/fa";

export const useCallIcon = () => {
  const getCallIcon = (call) => {
    if (call.call_type === "missed") {
      return <FaPhoneSlash className="missed-call-icon" />;
    }
    return call.direction === "inbound" ? (
      <FaPhone className="inbound-call-icon" />
    ) : (
      <FaPhoneVolume className="outbound-call-icon" />
    );
  };
  return { getCallIcon };
};
// Group calls by date
// const groupedCalls = calls
//   .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
//   .reduce((acc, call) => {
//     const date = new Date(call.created_at).toLocaleDateString([], {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//     if (!acc[date]) {
//       acc[date] = [];
//     }
//     acc[date].push(call);
//     return acc;
//   }, {});

// Get the correct call icon
// const getCallIcon = (call) => {
//   if (call.call_type === "missed") {
//     return <FaPhoneSlash className="missed-call-icon" />;
//   }
//   return call.direction === "inbound" ? (
//     <FaPhone className="inbound-call-icon" />
//   ) : (
//     <FaPhoneVolume className="outbound-call-icon" />
//   );
// };
