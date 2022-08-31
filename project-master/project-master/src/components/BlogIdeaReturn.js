import React, { Component, useEffect, useState } from "react";
import axios from "axios";
const BlogIdeaReturn = ({ getData, dataFrom }) => {
  const [reciever, setReciever] = useState("");
  const topic = getData.blogTopicIdeas;
  let a = "";
  const Recieve = () => {
    if (topic && dataFrom === "topic") {
      axios
        .post(
          `http://localhost:8080/topic`,
          { topic: topic },
          {
            headers: {
              "Access-Control-Allow-Origin": "true",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // const response = JSON.stringify(res);
          // console.log(response);
          console.log("topic");

          setReciever(res.data);
        });
      //// title generation
    } else if (topic && dataFrom === "title") {
      axios
        .post(
          `http://localhost:8080/title`,
          { topic: topic },
          {
            headers: {
              "Access-Control-Allow-Origin": "true",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // const response = JSON.stringify(res);
          // console.log(response);
          console.log("title");
          setReciever(res.data);
        });
    } else if (topic && dataFrom === "blog") {
      axios
        .post(
          `http://localhost:8080/blog`,
          { topic: topic },
          {
            headers: {
              "Access-Control-Allow-Origin": "true",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // const response = JSON.stringify(res);
          // console.log(response);
          console.log("blog");
          setReciever(res.data);
        });
    }
  };
  useEffect(() => {
    console.log({ topic });
    Recieve();
  }, [topic]);
  a = reciever.split("\n");
  console.log(a);
  return (
    <div className="col-6">
      <h3 id="blogTopicIdeas">
        {" "}
        {a.map((name) => (
          <h2>{name}</h2>
        ))}
      </h3>
    </div>
  );
};

export default BlogIdeaReturn;
