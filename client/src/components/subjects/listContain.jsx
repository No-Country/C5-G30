import React from "react";

const ListContain = ({data, teacher}) => {
  return (
    <li className="list-result">
      <p className="name-subject">{data.name}</p>
      <p className="name-campus">{data.campo}</p>
      <p className="name-teacher">{`Pr. ${teacher.firstName} ${teacher.lastName}` }</p>
      <a className="link-detail-subject" href="/details">
        Ver
      </a>
    </li>
  );
};

export default ListContain;
