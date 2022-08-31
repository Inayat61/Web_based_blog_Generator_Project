import React, { useState } from "react";
import BlogIdeaReturn from "./BlogIdeaReturn";

function Third() {
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
    <div>
      <div className="form">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <form className="forms" onSubmit={submitData}>
                <label className="blog">
                  {" "}
                  Enter section title you want to expand
                  <br />
                  <input
                    className="input"
                    type="text"
                    id="blogTopic"
                    name="blogTopic"
                    placeholder="Enter a section title "
                    value={blogTopicIdeas}
                    onChange={handle}
                  />
                </label>
                <br />

                <div className="banner__btn">
                  <button className="btn btn-smart"> Expand Title </button>
                </div>
              </form>
            </div>
            {<BlogIdeaReturn getData={getData} dataFrom="blog" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
