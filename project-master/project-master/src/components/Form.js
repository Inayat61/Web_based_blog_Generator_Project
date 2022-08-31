import React from "react";
import { useRef, useEffect, useState } from "react";
import BlogIdeaReturn from "./BlogIdeaReturn";

function Form() {
  const [blogTopicIdeas, setBlogTopicIdea] = useState("");
  const [getData, setGetData] = useState({});

  const handle = (e) => {
    setBlogTopicIdea(e.target.value);
  };

  const submitData = (e) => {
    setGetData({ blogTopicIdeas: blogTopicIdeas });
    console.log(getData);
    e.preventDefault();
  };

  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form className="forms" onSubmit={submitData}>
              <label className="blog">
                What topic do you want to get blog ideas on?
                <br />
                <input
                  className="input"
                  type="text"
                  id="blogTopic"
                  name="blogTopic"
                  placeholder="Enter a Blog Topic"
                  value={blogTopicIdeas}
                  onChange={handle}
                  // ref={blogTopicInput}
                />
              </label>
              <br />

              <div className="banner__btn">
                <button className="btn btn-smart" type="submit">
                  {" "}
                  Generate ideas{" "}
                </button>
              </div>
            </form>
          </div>
          {<BlogIdeaReturn getData={getData} dataFrom="topic" />}
        </div>
      </div>
    </div>
  );
}

export default Form;
