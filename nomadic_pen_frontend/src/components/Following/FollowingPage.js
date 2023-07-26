/* By Jamini Bhatt */
import React from 'react';
import '../../styles/FollowingPage.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const FollowingPage = () => {
  const [posts, setPosts] = useState([]);

  // Function to fetch the posts from the server
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/posts');
      setPosts(response.data.data); 
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Call the fetchPosts function when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to format date to dd - mm - yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"></link>
    <div className="following-page ">
      <div className='row'>
        <div className='col-md-12'>
          <div className='col-md-1' style={{padding: 10}}></div>
          <div className='col-md-10'>
            <br/>
            {/* <h2>Following Page</h2> */}
            <div className="author-list grow">
              {posts.map(post => (
                <div key={post._id} className="author-card">
                  <img
                    className="profile-picture"
                    src={post.featuredImage}
                    alt={`Profile of ${post.title}`} />
                  <h3>{post.title}</h3>
                  <h5> Posted On <b>{formatDate(post.createdAt)}</b></h5>
                  // By <b>{post.authorId}</b>
                  {/* <div className='content' dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                  <Link to={"/posts/" + post._id}>
                    More...
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className='col-md-1' style={{ padding: 10, textAlign: 'right'}}></div>
        </div>
      </div>
    </div></>
  );
};

export default FollowingPage;
