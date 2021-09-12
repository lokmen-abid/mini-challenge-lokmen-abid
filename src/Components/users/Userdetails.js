import React, { useEffect, useState } from "react";
import Pageloader from "../loader/Pageloader";
import axios from "axios";

function Userdetails(props) {
  const [details, setDetails] = useState([]);
  const [loader, showLoader, hideLoader] = Pageloader();

  useEffect(() => {
    showLoader();
    axios
      .get(
        `https://gorest.co.in/public/v1/posts?user_id=${props.match.params.id}`
      )
      .then((res) => {
        setDetails(res.data.data);
      })
      .then((res) => hideLoader())
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {details.length === 0 ? (
        <div> this user dosen't have eny details </div>
      ) : (
        <div>
          {" "}
          {details.map((detail, id) => (
            <div key={id}> {detail.body} </div>
          ))}{" "}
        </div>
      )}
      {loader}
    </div>
  );
}

export default Userdetails;
