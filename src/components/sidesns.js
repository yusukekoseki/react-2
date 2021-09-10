import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Sidesns = () => {
  return (
    <div className="sidesns">
      <ul className="share">
        <li>
          <a href="https://www.facebook.com/mthofficial" target="_blank">
            <FaFacebookF className="fa" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mth_official?lang=ja" target="_blank">
            <FaTwitter className="fa" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidesns;
