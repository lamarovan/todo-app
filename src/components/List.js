import React from "react";

const List = ({ title, userId, id }) => {
  return (
    <div>
      <h4>Title: {title}</h4>
      <p>UserId: {userId}</p>
      <p>Id: {id}</p>
    </div>
  );
};

export default List;
