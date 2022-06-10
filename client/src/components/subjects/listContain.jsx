import React from "react";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import host from "../../helpers/host";
import UseFetchPost from "../../hooks/useFetchPost";


const ListContain = ({data, teacher, incripte}) => {
  const user = useSelector((state) => state.auth.user);
  let actionSubject;
  if (!incripte) {
    actionSubject = <p className="btn-incript-subject" onClick={handleClink}>Inscribirme</p>
  } else{
    actionSubject = <Link className="link-detail-subject" to="/details">Ver</Link>
  }

  async function handleClink (){
    let idMateria = data._id
    let response = await UseFetchPost(`${host.development}/stu/addMateriaStu/${user.id}`, {idMateria})
    console.log(response)
  }
  return (
    <li className="list-result">
      <p className="name-subject">{data.name}</p>
      <p className="name-campus">{data.campo}</p>
      <p className="name-teacher">{`Pr. ${teacher.firstName} ${teacher.lastName}` }</p>
      {actionSubject}
    </li>
  );
};

export default ListContain;
