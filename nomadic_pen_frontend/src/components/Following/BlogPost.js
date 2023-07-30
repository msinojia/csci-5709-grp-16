/* By Jamini Bhatt */

import React from 'react';
import '../../styles/BlogPost.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


const BlogPost = () => {
  const [post, setPost] = useState();
  //let post = {};
  const { id } = useParams(); // Extracts the post ID from the URL

  // Function to fetch a post by its ID from the server
  const fetchPostById = async () => {
    try {
      const response = await axios.get('https://nomadic-pen.onrender.com/posts/' + id);
      setPost(response.data.data);
    } catch (error) {
      console.error('Error fetching post by ID:', error);
    }
  };

  // Call the fetchPostById function when the component mounts or when the ID changes
  useEffect(() => {
    fetchPostById();
  }, [id]);

  function likepost() {
    $('#like').addClass('hithere');
  }

  function commentpost() {
    alert('Subscribe to comment on a post');
  }

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
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <div className='row'>
        <div className='col-md-12'>
          <div className='col-md-1' style={{ padding: 10 }}></div>
          <div className='col-md-10'>
            <div className="blog-post grow">
              {post ? ( // Render the post data if it is available
                <>
                  <img className="picture" src={post.featuredImage} alt="Featured" />
                  <h1>{post.title}</h1>
                  <FontAwesomeIcon id="like" onClick={() => { likepost() }} style={{ textAlign: 'right', marginRight: '15px' }} className='icon' icon={faThumbsUp} />
                  <FontAwesomeIcon style={{ textAlign: 'right' }} onClick={() => { commentpost() }} className='icon' icon={faComment} />

                  {/* Render other post details */}
                  <div className="meta-info">
                    <p className="author">By {post.authorId}</p>
                    <p className="date-posted">Posted on {formatDate(post.createdAt)}</p>
                  </div>
                  <div className='content' dangerouslySetInnerHTML={{ __html: post.content }} />
                </>
              ) : (
                <p>Loading...</p> // Render a loading message while the data is being fetched
              )}

              <p style={{ textAlign: 'right' }}><Link to={"/posts/following"}>Back to following page</Link></p>
            </div>
          </div>
          <div className='col-md-1' style={{ padding: 10, textAlign: 'right' }}></div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
