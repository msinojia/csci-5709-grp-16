import React, { useState, useEffect } from 'react';
import axios from "axios";
import { List, ListItem, Box, Typography, Card, CardContent, CardMedia, CardActionArea} from '@mui/material';
const ArticleBox = () => {
    const [articles, setArticles] = useState([]);
    const handleArticleClick = (articleId) => {
        alert('Redirecting to the Article Page');
    };

    useEffect(() => {
        axios.get('http://localhost:8000/fetchAllArticles')
            .then((response) => {
                setArticles(response.data);
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);
            });
    }, []);
    return (
        <>
            <h3>My Posted Articles</h3>
            <Box name="articleBox" sx={{ display: 'flex', maxHeight: '410px', overflow: 'auto', border: '1px solid black', borderRadius: '4px' }}>
                <List sx={{ width: '100%'}}>
                    {articles.map((article) => (
                        <ListItem key={article._id}>
                            <Card sx={{ width: '100%' }}>
                                <CardActionArea onClick={() => handleArticleClick(article.id)}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image= {article.featuredImage}
                                        alt={article.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {article.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    );
};

export default ArticleBox;