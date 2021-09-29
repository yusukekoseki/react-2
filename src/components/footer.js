import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span className="copylight">© 2021 koseki Corp.</span>
      <small>
        <a href="https://newsapi.org">Powered by NewsAPI.org</a>
      </small>
      <a className="contact" href="/contact/" target="_blank">
        お問い合わせ
      </a>
    </div>
  );
};

export default Footer;
