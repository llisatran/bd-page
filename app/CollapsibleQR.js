import { useState } from "react";
import Image from "next/image";

const CollapsibleQR = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container">
      <button onClick={toggleCollapse} className="toggleButton">
        {isCollapsed ? "Show QR" : "Hide QR"}
      </button>
      <div className={`imageContainer  ${isCollapsed ? "collapsed" : ""}`}>
        <Image src="/qr.png" alt="qr" width={150} height={150} />
      </div>
    </div>
  );
};

export default CollapsibleQR;
