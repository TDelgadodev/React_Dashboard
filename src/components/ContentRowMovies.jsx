import React from "react";
import { Metric } from "./Metric";

export const ContentRowMovies = () => {
  const metrics = [
    {
      title: "Movies",
      color: "primary",
      value: 21,
      icon: "fa-film",
    },
    {
      title: "Awards",
      color: "success",
      value: 79,
      icon: "fa-award",
    },
    {
      title: "Users",
      color: "warning",
      value: 49,
      icon: "fa-user",
    },
  ];
  return (
  <div className="row">{

    
    metrics.map((metric,index) => {
      return <Metric {...metric} key={index + metric.title}/>
    })
    
    
    }</div>
  );
};
