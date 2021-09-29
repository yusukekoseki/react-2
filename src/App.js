import React from "react";
import "./styles.scss";
import Title from "./components/title";
import Title2 from "./components/title2";
import Side from "./components/sidevar";
import Contents from "./components/contents";
import Pickup from "./components/pickup";
import Sns from "./components/sns";
import Sidesns from "./components/sidesns";
import Footer from "./components/footer";
import Fetchapi from "./components/fetchapi";

const App = () => {
  return (
    <div className="App">
      <Title />
      <Title2 />
      <Side link={"https://youtu.be/upANnmMD_J8"} title={"恋のメガラバ"} />
      <Side
        link={"https://music.apple.com/us/artist/maximum-the-hormone/347905413"}
        title={"What's Up, People?!"}
      />
      <Side
        link={"https://youtu.be/MmfUyyUL07A"}
        title={"maximum the hormone"}
      />
      <Side
        link={"https://youtu.be/IC-wDpwzEt4"}
        title={"maximum the hormone Ⅱ～これからの麺カタコッテリの話をしよう～"}
      />
      <Side link={"https://youtu.be/dn17-EfMNY8"} title={"拝啓VAP殿"} />
      <Side link={"https://youtu.be/l-33SkD_tnw"} title={"F"} />
      <Side link={"https://youtu.be/beN5ep5MrdY"} title={"予襲復讐"} />
      <Side link={"https://youtu.be/Nw8624J0s5Y"} title={"恋のスペルマ"} />
      <Side
        link={"https://youtu.be/tKZbHjy9GWM"}
        title={"ハングリー・プライド"}
      />
      <Side link={"https://youtu.be/xet0uxxrF_U"} title={"G'old〜en〜Guy"} />

      <Sidesns />

      <Contents />

      <Fetchapi />

      <Pickup />

      <Sns />

      <Footer />
    </div>
  );
};

export default App;
