import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import Pageloader from "../loader/Pageloader";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";





const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Post() {
  const classes = useStyles();
   const [posts, setPosts] = useState([]);
  const [loader, showLoader, hideLoader] = Pageloader();

  useEffect(() => {
    showLoader();
    axios
      .get("https://gorest.co.in/public/v1/posts")
      .then((res) => {
        const listofposts = res.data.data
        listofposts.sort((a,b)=>{
          if(a.title.toLowerCase()>b.title.toLowerCase()){
            return 1
          } else if (a.title.toLowerCase()<b.title.toLowerCase()){
            return -1
          }
        })
        console.log(listofposts)
        setPosts(listofposts);
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
            <TableCell>Title</TableCell>
            <TableCell align="left">body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell component="th" scope="row">
               <Link to={`/postdetails/${post.id}`}>{post.title}</Link>
              </TableCell>
              <TableCell align="left">{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loader}
    </TableContainer>
  );
}


//this is the second way i try it to work with it 
//


// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "title",
//     headerName: "Title",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 350,
//   },
// ];

// function Post() {
//   const [posts, setPosts] = useState([]);
//   const [loader, showLoader, hideLoader] = Pageloader();

//   useEffect(() => {
//     showLoader();
//     axios
//       .get("https://gorest.co.in/public/v1/posts")
//       .then((res) => {
//         const listofposts = res.data.data
//         listofposts.sort((a,b)=>{
//           if(a.title.toLowerCase()>b.title.toLowerCase()){
//             return 1
//           } else if (a.title.toLowerCase()<b.title.toLowerCase()){
//             return -1
//           }
//         })
//         console.log(listofposts)
//         setPosts(listofposts);
//       })
//       .then((res) => hideLoader())
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div
//       style={{ height: 400, width: "60%", marginLeft: "20%", marginTop: "5%" }}
//     >
//       {loader}
//       <DataGrid
//         rows={posts}
//         columns={columns}
//         pageSize={10}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }

// export default Post;

