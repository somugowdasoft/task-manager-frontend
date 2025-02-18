import React, { useEffect } from "react";
import { LuListTodo } from "react-icons/lu";
import { IoCalendarNumber } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";
import axios from "axios";
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import icon from "../utils/icon.PNG";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Get the current route
  axios.defaults.withCredentials = true;

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  function openTodo() {
    navigate("/Home/todos");
  }
  function openTask() {
    navigate("/Home/task");
  }
  function openNotes() {
    navigate("/Home/notes");
  }
  function gototDashboard() {
    navigate("/Home");
  }
  function logOut() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logout`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  // Function to check if the current route is active
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="nav-left" data-aos="fade-right">
      <button className="todo-theme">
        <img src={icon} alt="" />
      </button>
      <button
        onClick={gototDashboard}
        className={`nav-icon skull ${isActive("/Home")}`}
      >
        <BiSolidDashboard size={22} color="white" />
      </button>
      <button
        onClick={openTodo}
        className={`nav-icon skull ${isActive("/Home/todos")}`}
      >
        <LuListTodo size={20} color="white" />
      </button>
      <button
        onClick={openTask}
        className={`nav-icon skull ${isActive("/Home/task")}`}
      >
        <IoCalendarNumber size={20} color="white" />
      </button>
      <button
        onClick={openNotes}
        className={`nav-icon skull ${isActive("/Home/notes")}`}
      >
        <FaRegNoteSticky size={20} color="white" />
      </button>
      <button className="nav-icon skull" onClick={logOut}>
        <BiLogOut size={22} color="white" />
      </button>
    </nav>
  );
};

export default Navbar;
