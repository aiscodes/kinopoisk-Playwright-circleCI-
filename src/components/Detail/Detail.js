import React from "react";
import "./Detail.css";
import { useSelector } from "react-redux";

export default function Detail() {
  const data = useSelector((r) => r.detail);
  console.log(data);
  return (
    <div className="main">
      <div className="container detail__row">
        <div className="detail__left">
          <img src={data.posterUrl} alt="" />
        </div>
        <div className="detail__right">
          <h1 className="detail__title">{data.nameRu}</h1>
          <p className="desc">{data.description}</p>
          <a className="a" target="_blank" href={data.webUrl}>
            <button className="detail__show">Смотреть</button>
          </a>
        </div>
      </div>
    </div>
  );
}
