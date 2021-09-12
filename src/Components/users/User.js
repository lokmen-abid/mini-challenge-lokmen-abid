import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Pageloader from "../loader/Pageloader";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function User() {
  const classes = useStyles();
  const [loader, showLoader, hideLoader] = Pageloader();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    showLoader();
    axios
      .get("https://gorest.co.in/public/v1/users")
      .then((res) => {
        const listofusers = res.data.data 
        listofusers.sort((a,b)=>{
          if(a.name.toLowerCase()>b.name.toLowerCase()){
            return 1
          } else if (a.name.toLowerCase()<b.name.toLowerCase()){
            return -1
          }
        })
        setUsers(listofusers);
      })
      .then((res) => hideLoader())
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">gender</TableCell>
            <TableCell align="left">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
               <Link to={`/userdetails/${user.id}`}>{user.name}</Link>
              </TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="left">{user.gender}</TableCell>
              <TableCell align="left">{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loader}
    </TableContainer>
  );
}
