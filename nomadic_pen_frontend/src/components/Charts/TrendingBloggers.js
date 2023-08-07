import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function TrendingBloggers ({ data })
{
    return(
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Total Followers</TableCell>
              <TableCell>Total Likes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((blogger) => (
              <TableRow key={blogger.email}>
                <TableCell>{blogger.name}</TableCell>
                <TableCell>{blogger.email}</TableCell>
                <TableCell>{blogger.totalFollowers}</TableCell>
                <TableCell>{blogger.totalLikes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        )
}

export default TrendingBloggers;