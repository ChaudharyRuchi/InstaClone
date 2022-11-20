import React from "react";
import "./Card.css";
const Card = ({ post }) => {
  function formatDate(newDate) {
    const months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
    const d = new Date(newDate);
    console.log(d);
    const year = d.getUTCFullYear();
    console.log(year);
    const date = d.getDate();
    console.log(date);
    const monthName = months[d.getMonth()];
    const formatted = `${date} ${monthName} ${year}`;
    return formatted.toString();
  }
  return (
    <>
      <section className="card">
        <section className="card_header">
          <div>
            <div className="card_header__name">{post.name}</div>
            <div className="card_header__place">{post.location}</div>
          </div>
          <span>
            <img src={"/images/more_icon.svg"} alt="more" />
          </span>
        </section>
        <section className="card_image">
          {console.log(post.image.url)}
          <img src={post.image.url} alt="place" />
        </section>
        <div className="desc-section">
          <div className="upper-desc">
            <div className="heart-rocket-likes">
              <img src={"images/heart.png"} alt="heart" />
              <span>
                <img src={"/images/share.png"} alt="send" />
              </span>
              <div className="likes">{post.likes} likes</div>
            </div>
            <div className="date">{formatDate(post.date)}</div>
          </div>
          <div className="description">{post.description}</div>
        </div>
      </section>
    </>
  );
};
export default Card;
