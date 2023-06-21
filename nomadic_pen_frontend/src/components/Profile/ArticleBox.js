import React from 'react';
import { List, ListItem, Box, Typography, Card, CardContent, CardMedia, CardActionArea} from '@mui/material';
const ArticleBox = () => {
    const handleArticleClick = (articleId) => {
        alert('Redirecting to the Article Page');
    };

    const mockArticles = [
        { id: 1, title: 'Clickable Article 1', image:'assets/profile-page/card-images/istockphoto-5.jpg'},
        { id: 2, title: 'Clickable Article 2', image:'assets/profile-page/card-images/istockphoto-4.jpg'},
        { id: 3, title: 'Clickable Article 3', image:'assets/profile-page/card-images/istockphoto-3.jpg'},
        { id: 4, title: 'Clickable Article 4', image:'assets/profile-page/card-images/istockphoto-1.jpg' },
        { id: 5, title: 'Clickable Article 5', image:'assets/profile-page/card-images/istockphoto-6.jpg' },
        { id: 6, title: 'Clickable Article 6', image:'assets/profile-page/card-images/istockphoto-5.jpg' },
        { id: 7, title: 'Clickable Article 7', image:'assets/profile-page/card-images/istockphoto-2.jpg' },
        { id: 8, title: 'Clickable Article 8', image:'assets/profile-page/card-images/istockphoto-3.jpg' },
        { id: 8, title: 'Clickable Article 9', image:'assets/profile-page/card-images/istockphoto-4.jpg' },
        { id: 8, title: 'Clickable Article 10', image:'assets/profile-page/card-images/istockphoto-6.jpg' },
    ];
    return (
        <>
            <h3>My Posted Articles</h3>
            <Box name="articleBox" sx={{ display: 'flex', maxHeight: '410px', overflow: 'auto', border: '1px solid black', borderRadius: '4px' }}>
                <List sx={{ width: '100%'}}>
                    {mockArticles.map((article) => (
                        <ListItem key={article.id}>
                            <Card sx={{ width: '100%' }}>
                                <CardActionArea onClick={() => handleArticleClick(article.id)}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image= {article.image}
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