import React, { useState } from "react";
import "../styles/dashboard.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getStudents,
  getStudent,
  getMaterias,
  getTeachers,
} from "../reducer/actions";
import Loader from "./Load/Loader";
import host from "../helpers/host";
import UseFetch from "../hooks/useFetch";

const Dashboard = () => {

  const estado = useSelector((state) => state);

  const dispatch = useDispatch();
  async function getData() {
    const data = await UseFetch(`${host.development}/stu/getStudent/${estado.auth.user.id}`);
    dispatch(getMaterias(data.data.students.materias));
    dispatch(getStudent(data));
  }
  
  useEffect(() => {
    getData()
  }, []);

  
  // useEffect(() => {
  //   dispatch(getMaterias());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getTeachers());
  // }, [dispatch]);
  //////////////////////////////////////////////////////////////
  const student = useSelector((state) => state.auth.student);
  const subjects = useSelector((state) => state.auth.subjects);
  // const materias = useSelector((state) => state.auth.materias);
  // const teachers = useSelector((state) => state.auth.teachers);

  //////////////////////////////////////////////////////////////
  // console.log(student, "listado estudiantes");
  // console.log(materias, "listado de Materias");
  // console.log(teachers,"listado de teachers");
  const [chat, setChat] = useState("");

  const chats = [
    {
      text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur expedita corporis suscipit veritatis neque reiciendis sint",
      date: new Date().toLocaleDateString().toString(),
    },
  ];

  const [conversation, setConversation] = useState(chats);

  const handleChange = (e) => {
    e.preventDefault();
    setChat(e.target.value);
  };

  const addBubble = (e) => {
    e.preventDefault();

    setConversation((prevConversation) => [
      ...prevConversation,
      {
        text: chat,
        date: new Date().toLocaleDateString().toString(),
      },
    ]);
  };

  const [state, setState] = useState("");

  return (
    <>
      {!student.loading ? (     
        <section className="dashboard-wrapper">
          <section className="main-section">
            <h2 className="main-title">Dashboard</h2>
            { !subjects ? <span className="danger-new">No estas asignado una COHORTE/MATERIA</span> : ""}
            <div className="dashboard-bubble">          
              <div className="bubble-container">
                <h1>{student.cohorte}</h1>
                <div className="date-info">
                  <span>Cohorte</span>
                </div>
              </div>
              <div className="bubble-container">
                <h1>{subjects.length}</h1>
                <div className="date-info">
                  <span>Materias</span>
                </div>
              </div>

              <div className="bubble-container">
                {student.status === true ? (
                  <h1>Vigente</h1>
                ) : (
                  <h1>Abandonado</h1>
                )}
                <div className="date-info">
                  <span>Estado</span>
                </div>
              </div>
              <div className="bubble-container">
                <h1>00</h1>
                <div className="date-info">
                  <span>Promedio</span>
                </div>
              </div>
            </div>
          </section>

          <section className="main-section">
            <h2 className="main-title">Descripcion del Cohorte</h2>
            <article className="main-subsection">
              {conversation.map((chat, index) => (
                <div className="conversation-bubble" key={index}>
                  <p>{chat.text}</p>
                  <div className="date-info">
                    <span>Date: {chat.date}</span>
                  </div>
                </div>
              ))}
            </article>

            <article className="main-subsection">
              <input type="text" value={chat} onChange={handleChange} />
              <div className="date-info">
                <button onClick={addBubble} type="button">
                  Aceptar
                </button>
              </div>
            </article>
          </section>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="waves"
          >
            <path
              fill="#1793AA"
              fillOpacity="1"
              d="M0,128L30,117.3C60,107,120,85,180,112C240,139,300,213,360,240C420,267,480,245,540,240C600,235,660,245,720,218.7C780,192,840,128,900,112C960,96,1020,128,1080,133.3C1140,139,1200,117,1260,90.7C1320,64,1380,32,1410,16L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Dashboard;
