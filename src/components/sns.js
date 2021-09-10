import React from "react";

const Sns = () => {
  return (
    <div className="sns">
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v11.0"
        nonce="GgGYBK9k"
      ></script>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/mthofficial"
        data-tabs="timeline"
        data-width="300"
        data-height="300"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/mthofficial"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/mthofficial">
            マキシマム ザ ホルモン( maximum the hormone )
          </a>
        </blockquote>
      </div>
    </div>
  );
};

export default Sns;
