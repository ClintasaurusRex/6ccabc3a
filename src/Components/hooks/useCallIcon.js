import { FaPhoneVolume, FaPhone, FaPhoneSlash } from "react-icons/fa"; // Awesome npm package

// This determins which phone icon to display :)
export const useCallIcon = () => {
  // takes the call object and returns the right icon
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
