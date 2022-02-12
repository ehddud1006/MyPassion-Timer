import React from "react";
import "./date.css";
import { useState, useEffect } from "react";
import First from "../../image/first.jpg";
import Second from "../../image/second.jpg";
import Third from "../../image/third.jpg";
import { Link } from "react-router-dom";
import RunTime from "../studentTime/RunTime";
import axios from "axios";

function Datedd({ category }) {
  console.log(category);
  //   console.log(new Date().toDateString());
  var now = new Date();
  //   var hour = now.getHours();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();
  // console.log(search)
  // console.log(location)
  // http://localhost:3000/posts/?user=kdyUpdated
  // {pathname: '/posts/', search: '?user=kdyUpdated', hash: '', state: undefined}
  useEffect(() => {
    const fetchPosts = async () => {
      // const res = await axiosInstance.get("/back/time/")
      const res = await axios.get("http://localhost:3000/back/time/");
      console.log(res);

      setPosts(res.data);
      // {data: Array(3), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
      // config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
      // data: (3) [{…}, {…}, {…}]
      // headers: {content-length: '581', content-type: 'application/json; charset=utf-8', date: 'Wed, 02 Feb 2022 21:56:18 GMT', etag: 'W/"245-nGaT93/POQnKQsl7TaP5icxjyF8"', x-powered-by: 'Express'}
      // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}
      // status: 200
      // statusText: "OK"
      // [[Prototype]]: Object
    };
    fetchPosts();
  }, []);
  console.log(posts);
  let pposts = posts;
  pposts = pposts.sort(function (a, b) {
    return b.time - a.time;
  });
  console.log(pposts);
  pposts.map((p) => console.log(p));
  return (
    <>
      <div className="date">
        <div className="dateLeft"></div>
        <div className="dateCenter">
          <span>{month}월</span>
          <span>{day}일</span>
        </div>
        <div className="dateRight"></div>
      </div>
      <div className="dategrayBar"></div>
      <div className="top3">일간 Top3</div>
      <div className="price">
        <div className="priceLeft"></div>
        <div className="priceCenter">
          <div className="set">
            <img className="priceImg" src={Second} alt="" />
            <p className="winner">저니닝</p>
            <p className="winnerTime">07:33:05</p>
          </div>
          <div className="set">
            <img className="priceImg" src={First} alt="" />
            <p className="winner">동영아, 정신체리자</p>
            <p className="winnerTime">07:49:55</p>
          </div>
          <div className="set">
            <img className="priceImg" src={Third} alt="" />
            <p className="winner">의문없이 명료함</p>
            <p className="winnerTime">07:29:13</p>
          </div>
        </div>
        <div className="priceRight"></div>
      </div>
      <div className="dategrayBar"></div>
      <div className="study">
        <div className="studyLeft">
          <span>공부중</span>
          <span>1,607</span>
          <span>명</span>
          <span>오늘 전체</span>
          <span>4,430</span>
          <span>명</span>
        </div>
        <div className="studyCenter"></div>
        <div className="studyRight"></div>
      </div>
      <div className="study">
        <div className="studyLeft studyLeft2">
          <span>내 등수</span>
          <span>0</span>
          <span>등</span>
          <span>상위</span>
          <span>0%</span>
        </div>
        <div className="studyCenter"></div>
        <div className="studyRight"></div>
      </div>

      <RunTime data={pposts}></RunTime>

      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">1</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>동영아, 정신체리자</div>
              <div>07:33:05</div>
            </div>
            <div className="rel">
              <div className="graph">.</div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">2</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>저니닝</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 1000 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">3</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 900 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">4</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 800 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">5</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 700 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">6</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 600 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">7</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 500 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="studyStatus">
        <div className="studyStatusLeft">
          <p className="writeIcon">8</p>
        </div>
        <div className="studyStatusCenter">
          <div className="targetName">
            <div>대학생</div>
            <div class="nameTime">
              <div>의문없이 명료함</div>
              <div>07:29:13</div>
            </div>
            <div className="rel">
              <div className="graph" style={{ width: 400 }}>
                .
              </div>
              <div className="graph2">.</div>
            </div>
          </div>
        </div>
        <div className="studyStatusRight"></div>
      </div>
      <div className="bottom">
        <div className="bottomLeft"></div>
        <div className="bottomCenter">
          {category === "수능" ? (
            <Link to="/su" className="link">
              <i className="bottomIcon1 fas fa-pencil-alt  dada"></i>
              <p className="bottomText dada">수능</p>
            </Link>
          ) : (
            <Link to="/su" className="link">
              <i className="bottomIcon1 fas fa-pencil-alt  "></i>
              <p className="bottomText">수능</p>
            </Link>
          )}

          {category === "공무원" ? (
            <Link to="/gong" className="link">
              <i className="bottomIcon2 fas fa-user-tie dada "></i>
              <p className="bottomText dada">공무원</p>
            </Link>
          ) : (
            <Link to="/gong" className="link">
              <i className="bottomIcon2 fas fa-user-tie "></i>
              <p className="bottomText ">공무원</p>
            </Link>
          )}

          {category === "전체" ? (
            <Link to="/" className="link">
              <i className="bottomIcon1 far fa-grin-alt dada "></i>
              <p className="bottomText dada">전체</p>
            </Link>
          ) : (
            <Link to="/" className="link">
              <i className="bottomIcon1 far fa-grin-alt "></i>
              <p className="bottomText">전체</p>
            </Link>
          )}

          {category === "자격증" ? (
            <Link to="/ja" className="link">
              <i className="bottomIcon2 far fa-credit-card dada"></i>
              <p className="bottomText dada">자격증</p>
            </Link>
          ) : (
            <Link to="/ja" className="link">
              <i className="bottomIcon2 far fa-credit-card "></i>
              <p className="bottomText">자격증</p>
            </Link>
          )}

          {category === "대학생" ? (
            <Link to="/dae" className="link">
              <i className="bottomIcon2 fas fa-university dada"></i>
              <p className="bottomText dada">대학생</p>
            </Link>
          ) : (
            <Link to="/dae" className="link">
              <i className="bottomIcon2 fas fa-university "></i>
              <p className="bottomText">대학생</p>
            </Link>
          )}
        </div>
        <div className="bottomRight"></div>
      </div>
    </>
  );
}

export default Datedd;
