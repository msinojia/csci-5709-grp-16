import React from 'react';

const TravelGuideBlog = ({title, content, imageSrc, date, author}) => {

    return (
        <><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='col-md-10'>
                        <div className="blog-post grow">
                            <img
                                className="picture"
                                src={`data:image/jpg;base64, ${imageSrc}`} />
                            <h1>{title} </h1>
                            <div className="meta-info">
                                <p className="author">By {author}</p>
                                <p className="date-posted">Posted on {date}</p>
                            </div>
                           <p className="content">{content}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelGuideBlog;
