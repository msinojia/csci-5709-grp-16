import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import {useLocation} from "react-router-dom";

const TravelGuideArticle = () => {

    const [title, setTitle] = useState();
    const [imageSrc, setImageSrc] = useState();
    const [author, setAuthor] = useState();
    const [content, setContent] = useState();

    const {state} = useLocation();

    useEffect(()=>{
        const fetchArticle = async () => {
            try {
                const articleDataResponse = await axios.get(`http://localhost:8000/nomadic-pen/travel-guide/article/${state}`);
                const articleData = articleDataResponse.data;
                articleData.map((article)=>{
                    setTitle(article["article_title"]);
                    setAuthor(article["article_author_id"]);
                    setContent(article["article_content"]);
                    setImageSrc(article["article_image"]);

                    return{};
                })

                console.log(articleData)
            }catch (error) {
                console.error(error);
            }
        }

        fetchArticle();
    }, [state]);

    return (
        <><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='col-md-10'>
                        <div>
                            <p style={{'text-align': 'center'}}>
                                <img
                                    className="picture"
                                    src={`data:image/png;base64,${imageSrc}`} alt="Red dot" width="650" height="600"/>

                            </p>
                            <h1>{title} </h1>
                            <div className="meta-info">
                                <p className="author">By {author}</p>
                            </div>
                            <p className="content">{content}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelGuideArticle;
