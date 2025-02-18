import React, { useEffect, useState } from "react";
import DarkMode from "./DarkMode/Darkmode";
import Notification from "./Notification/Notification";
import { IoMdNotifications } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import TypeWriter from "typewriter-effect";
import Calendar from "./Calendar/Calendar";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = ({ tasks }) => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [user, setUser] = useState();
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [dialog, setDialog] = useState({
    isLoading: false,
  });

  axios.defaults.withCredentials = true;
  useEffect(() => {
    AOS.init({ duration: 1200 });
    // Fetch Programming Quote
    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": process.env.REACT_APP_API_KEY_NINJA }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setQuote(data[0].quote); // Correct key
        setAuthor(data[0].author);
      })
      .catch((error) => console.error("Quote Fetch Error:", error));

    // Fetch User Data
    axios
      .get(`${process.env.REACT_APP_API_URL}/getUser`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error("User Fetch Error:", err));
  }, []);


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/task/getTask`)
      .then((res) => {
        let temp = res.data.filter(
          (obj) =>
            obj.done === false &&
            obj.task.deadline === new Date().toISOString().split("T")[0]
        );
        setUpcomingTasks(temp);
      })
      .catch((err) => console.log(err));
  }, [tasks]);

  // console.log(upcomingTasks);

  const reloadQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": process.env.REACT_APP_API_KEY_NINJA },
    })
      .then((res) => res.json())
      .then((quotes) => {
        setQuote(quotes[0].quote);
        setAuthor(quotes[0].author);
      });
  };

  function openNotifi() {
    setDialog({ isLoading: true });
  }
  function closeNotifi() {
    setDialog({ isLoading: false });
  }
  return (
    <React.Fragment>
      <div className="profile" data-aos="fade-left">
        <div className="profile-div">
          <DarkMode />
          <button
            className={`${upcomingTasks.length ? " bell" : ""}`}
            onClick={openNotifi}
          >
            <span id="noti-count">{upcomingTasks.length}</span>
            <span>
              <IoMdNotifications size={25} color="#000" />
            </span>
          </button>
          <img
            title={user && `${user.userName}`}
            id="prof-img"
            src={user && `${user.picUrl}`}
            alt=""
          />
        </div>
        {dialog.isLoading && (
          <Notification
            closeNotifi={closeNotifi}
            upcomingTasks={upcomingTasks}
          />
        )}
        <Calendar />
        <div className="quote-div" data-aos="zoom-in">
          <h3>
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: [`" ${quote} "`],
              }}
            />
          </h3>
          <hr />
          <div className="quote-footer">
            <h4 id="auth-name"> - {author}</h4>
            <button onClick={reloadQuote}>
              <TfiReload color="orange" size={18} />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
