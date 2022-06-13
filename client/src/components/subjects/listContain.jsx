import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import host from "../../helpers/host";
import UseFetchPost from "../../hooks/useFetchPost";
import Swal from "sweetalert2";
import UseFetch from "../../hooks/useFetch";
import { getMaterias } from "../../reducer/actions";
const ListContain = ({data, subjectsInscripte}) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  let actionSubject;

  if (!subjectsInscripte.includes(data._id)) {
    actionSubject = <p className="btn-incript-subject" onClick={handleClink}>Inscribirme</p>
  } else{
    actionSubject = <Link className="link-detail-subject" to="/details">Ver</Link>
  }

  async function getData() {
    const data = await UseFetch(`${host.development}/stu/getStudent/${user.id}`);
    dispatch(getMaterias(data.data.students.materias));
  }
  async function handleClink (){
    let idMateria = data._id
    let response = await UseFetchPost(`${host.development}/stu/addMateriaStu/${user.id}`, {idMateria})
    if(response.data.msg === "Successfully Authenticated"){
      Swal.fire({
        icon: 'success',
        title: `Te has Inscripto correctamente a ${data.name}`,
        showConfirmButton: false,
        timer: 1500
      })
      getData()
    }
    

  }
  return (
    <li className="list-result">
      <p className="name-subject">{data.name}</p>
      <p className="name-campus">{data.campo}</p>
      { data.teachers.map( (teach, i) =>(
        <p key={i + teach.firstName} className="name-teacher">{`Prof. ${teach.firstName} ${teach.lastName}` }</p>
      ))}
      
      {actionSubject}
    </li>
  );
};

export default ListContain;
