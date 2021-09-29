import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Contents = () => {
  const [id, setId] = useState(1);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const item = await response.json();
    setPost(item);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="contents">
      <ul className="ranking">
        <div className="rank_article_left">
          <a href="https://youtu.be/MmfUyyUL07A">
            <img src="https://wmg.jp/packages/21750/images/ssss.jpg" alt="" />
          </a>
        </div>
        <div className="rank_article_right">
          <h2>
            <a href="https://youtu.be/MmfUyyUL07A">{post.title}</a>
          </h2>
          {loading ? <p>loading...</p> : <p> {post.body}</p>}
          <div className="rank_article_bottom">
            <span className="date">2020年</span>
            <ul className="sharecontents">
              <li>
                <a href="https://www.facebook.com/mthofficial">
                  <FaFacebookF className="fa" />
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/share?text=%E5%9B%BD%E5%9C%9F%E4%BA%A4%E9%80%9A%E7%9C%81%E3%81%8C%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%9F%E6%B8%AC%E9%87%8F%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E6%96%B0%E5%9F%BA%E6%BA%96+%26%238211%3B+%E3%81%A9%E3%82%8C%E3%81%A0%E3%81%91%E3%81%AE%E7%B2%BE%E5%BA%A6%E3%81%8C%E5%BF%85%E8%A6%81%EF%BC%9F&url=https://www.koseki.net/media/archives/210"
                  rel="nofollow"
                >
                  <FaTwitter className="fa" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ul>
      <ul className="ranking">
        <div className="rank_article_left">
          <a href="https://music.apple.com/us/artist/maximum-the-hormone/347905413">
            <img
              width="150"
              height="98"
              src="https://www.lyrical-nonsense.com/wp-content/uploads/2021/07/Maximum-the-Hormone-Buiikikaesu.jpg"
              className="attachment-thumbnail size-thumbnail wp-post-image"
              alt=""
            />
          </a>
        </div>
        <div className="rank_article_right">
          <h2>
            <a href="https://music.apple.com/us/artist/maximum-the-hormone/347905413">
              What's Up, People?!
            </a>
          </h2>
          <p>便利便利万歳 便利便利万歳 便利便利万歳 人間 便利便利...</p>
          <div className="rank_article_bottom">
            <span className="date">2020年</span>
            <ul className="sharecontents">
              <li>
                <a href="https://www.facebook.com/mthofficial">
                  <FaFacebookF className="fa" />
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/share?text=%E5%9B%BD%E5%9C%9F%E4%BA%A4%E9%80%9A%E7%9C%81%E3%81%8C%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%9F%E6%B8%AC%E9%87%8F%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E6%96%B0%E5%9F%BA%E6%BA%96+%26%238211%3B+%E3%81%A9%E3%82%8C%E3%81%A0%E3%81%91%E3%81%AE%E7%B2%BE%E5%BA%A6%E3%81%8C%E5%BF%85%E8%A6%81%EF%BC%9F&url=https://www.koseki.net/media/archives/210"
                  rel="nofollow"
                >
                  <FaTwitter className="fa" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ul>
      <ul className="ranking">
        <div className="rank_article_left">
          <a href="https://youtu.be/MmfUyyUL07A">
            <img
              width="150"
              height="98"
              src="https://stat.ameba.jp/user_images/20190607/19/erkyperkyfly/1a/13/j/o1280072014447954803.jpg"
              className="attachment-thumbnail size-thumbnail wp-post-image"
              alt=""
            />
          </a>
        </div>
        <div className="rank_article_right">
          <h2>
            <a href="https://youtu.be/MmfUyyUL07A">maximum the hormone</a>
          </h2>
          <p>小さな君の手</p>
          <div className="rank_article_bottom">
            <span className="date">2020年</span>
            <ul className="sharecontents">
              <li>
                <a href="https://www.facebook.com/mthofficial">
                  <FaFacebookF className="fa" />
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/share?text=%E5%9B%BD%E5%9C%9F%E4%BA%A4%E9%80%9A%E7%9C%81%E3%81%8C%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%9F%E6%B8%AC%E9%87%8F%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E6%96%B0%E5%9F%BA%E6%BA%96+%26%238211%3B+%E3%81%A9%E3%82%8C%E3%81%A0%E3%81%91%E3%81%AE%E7%B2%BE%E5%BA%A6%E3%81%8C%E5%BF%85%E8%A6%81%EF%BC%9F&url=https://www.koseki.net/media/archives/210"
                  rel="nofollow"
                >
                  <FaTwitter className="fa" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ul>
      <ul className="ranking">
        <div className="rank_article_left">
          <a href="https://youtu.be/IC-wDpwzEt4">
            <img
              width="150"
              height="98"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrQ6aLrndFKyVrufmgU1e6R_AGc6K4MQnzA&usqp=CAU"
              className="attachment-thumbnail size-thumbnail wp-post-image"
              alt=""
            />
          </a>
        </div>
        <div className="rank_article_right">
          <h2>
            <a href="https://youtu.be/IC-wDpwzEt4">
              maximum the hormone II～これからの麺カタコッテリの話をしよう～
            </a>
          </h2>
          <p>
            マキシマム ザ ホルモンが、新曲「maximum the hormone
            II～これからの麺カタコッテリの話をしよう～」のミュージックビデオを公開した（https://youtu.be/IC-wDpwzEt4）。
          </p>
          <div className="rank_article_bottom">
            <span className="date">2020年</span>
            <ul className="sharecontents">
              <li>
                <a href="https://www.facebook.com/mthofficial">
                  <FaFacebookF className="fa" />
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/share?text=%E5%9B%BD%E5%9C%9F%E4%BA%A4%E9%80%9A%E7%9C%81%E3%81%8C%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%9F%E6%B8%AC%E9%87%8F%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E6%96%B0%E5%9F%BA%E6%BA%96+%26%238211%3B+%E3%81%A9%E3%82%8C%E3%81%A0%E3%81%91%E3%81%AE%E7%B2%BE%E5%BA%A6%E3%81%8C%E5%BF%85%E8%A6%81%EF%BC%9F&url=https://www.koseki.net/media/archives/210"
                  rel="nofollow"
                >
                  <FaTwitter className="fa" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
};
export default Contents;
