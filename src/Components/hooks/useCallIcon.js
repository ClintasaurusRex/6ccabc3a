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
