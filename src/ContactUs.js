import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paper, Card, CardContent, CardHeader, Box, Grid, Container, IconButton, Link, Snackbar, Alert, Divider, TextField, Button } from "@mui/material";
import { LocationOn, Phone, Email, Facebook, Instagram, Twitter, FavoriteBorder as FavoriteIcon } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

  const handleFormSubmit = (data) => {
    console.log(data);
    setIsFormSubmitted(true);
    reset();
  };

  const handleCloseNotification = () => {
    setIsFormSubmitted(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/nature_green.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            padding: 4,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              CONTACT
            </Typography>
            <Divider />
            <Typography variant="h5" component="h2" gutterBottom>
              We'd <IconButton><FavoriteIcon /></IconButton> to help!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Feel free to say hello!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Have questions? Check out our <Link href="/faq">FAQs</Link> page for quick answers.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Get in Touch
                </Typography>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <TextField
                    label="Your Name"
                    fullWidth
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Email"
                    fullWidth
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    {...register("message")}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" color="primary" type="submit">
                    Send
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Contact Details" />
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1}>
                    <LocationOn sx={{ mr: 1 }} />
                    <Typography variant="body2">123 Address St, City, Country</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Phone sx={{ mr: 1 }} />
                    <Typography variant="body2">+1 234 567 890</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Email sx={{ mr: 1 }} />
                    <Typography variant="body2">contact@example.com</Typography>
                  </Box>
                  <Divider />
                  <Box mt={2}>
                    <IconButton color="primary" href="https://facebook.com">
                      <Facebook />
                    </IconButton>
                    <IconButton color="primary" href="https://instagram.com">
                      <Instagram />
                    </IconButton>
                    <IconButton color="primary" href="https://twitter.com">
                      <Twitter />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Snackbar open={isFormSubmitted} autoHideDuration={5000} onClose={handleCloseNotification}>
        <Alert onClose={handleCloseNotification} severity="success">
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;


// import React from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Paper } from "@mui/material";
// import { Card, CardContent, CardHeader } from "@mui/material";

// import {
//     Typography,
//     Divider,
//     TextField,
//     Button,
//     Box,
//     Grid,
//     Container,
//     IconButton,
//     Link,
//     Snackbar,
//     Alert,
// } from "@mui/material";
// import {
//     LocationOn,
//     Phone,
//     Email,
//     Facebook,
//     Instagram,
//     Twitter,
//     FavoriteBorder as FavoriteIcon,
// } from "@mui/icons-material";

// const schema = yup.object().shape({
//     name: yup.string().required("Name is required"),
//     email: yup
//         .string()
//         .email("Invalid email address")
//         .required("Email is required"),
//     message: yup.string().required("Message is required"),
// });

// const ContactUs = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//     } = useForm({
//         resolver: yupResolver(schema),
//     });
//     const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

//     const handleFormSubmit = (data) => {
//         // Perform form submission logic here
//         // For demonstration purposes, just console log the form data
//         console.log(data);
//         setIsFormSubmitted(true);
//         reset();
//     };

//     const handleCloseNotification = () => {
//         setIsFormSubmitted(false);
//     };

//     return (
//         <Box
//   sx={{
//     backgroundImage: `url(${process.env.PUBLIC_URL}/nature_green.jpg)`,
//     backgroundSize: 'cover',
//     backgroundPosition: "center",
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}
// >
//         <Container>
//             <Box textAlign="center">
//                 {/* Top Section */}
//                 <Typography variant="h4" component="h1" gutterBottom>
//                     CONTACT
//                 </Typography>
//                 <Divider />

//                 {/* Subheading Section */}
//                 <Typography variant="h5" component="h2" gutterBottom>
//                     We'd{" "}
//                     <IconButton>
//                         <FavoriteIcon />
//                     </IconButton>{" "}
//                     to help!
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                     Feel free to say hello!
//                 </Typography>

//                 {/* FAQ Section */}
//                 <Typography variant="body1" gutterBottom>
//                     Have questions? Check out our <Link href="/faq">FAQs</Link>{" "}
//                     page for quick answers.
//                 </Typography>
//             </Box>

//             {/* Form and Details Section */}
//             <Box mt={4}>
//                 <Grid container spacing={4}>
//                     {/* Form Component */}
//                     <Grid item xs={12} md={6}>
//                         <Paper elevation={3} sx={{ p: 4 }}>
//                             <Typography variant="h6" gutterBottom>
//                                 Get in Touch
//                             </Typography>
//                             <form onSubmit={handleSubmit(handleFormSubmit)}>
//                                 <TextField
//                                     label="Your Name"
//                                     fullWidth
//                                     {...register("name")}
//                                     error={!!errors.name}
//                                     helperText={errors.name?.message}
//                                     sx={{ mb: 2 }}
//                                 />
//                                 <TextField
//                                     label="Email"
//                                     fullWidth
//                                     {...register("email")}
//                                     error={!!errors.email}
//                                     helperText={errors.email?.message}
//                                     sx={{ mb: 2 }}
//                                 />
//                                 <TextField
//                                     label="Message"
//                                     multiline
//                                     rows={4}
//                                     fullWidth
//                                     {...register("message")}
//                                     error={!!errors.message}
//                                     helperText={errors.message?.message}
//                                     sx={{ mb: 2 }}
//                                 />
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     type="submit"
//                                 >
//                                     Send
//                                 </Button>
//                             </form>
//                         </Paper>
//                     </Grid>

//                     {/* Details Component */}
//                     <Grid item xs={12} md={6}>
//                         <Card>
//                             <CardHeader title="Contact Details" />
//                             <CardContent>
//                                 <Box display="flex" alignItems="center" mb={1}>
//                                     <LocationOn sx={{ mr: 1 }} />
//                                     <Typography variant="body2">
//                                         123 Address St, City, Country
//                                     </Typography>
//                                 </Box>
//                                 <Box display="flex" alignItems="center" mb={1}>
//                                     <Phone sx={{ mr: 1 }} />
//                                     <Typography variant="body2">
//                                         +1 234 567 890
//                                     </Typography>
//                                 </Box>
//                                 <Box display="flex" alignItems="center" mb={2}>
//                                     <Email sx={{ mr: 1 }} />
//                                     <Typography variant="body2">
//                                         contact@example.com
//                                     </Typography>
//                                 </Box>
//                                 <Divider />
//                                 <Box mt={2}>
//                                     <IconButton
//                                         color="primary"
//                                         href="https://facebook.com"
//                                     >
//                                         <Facebook />
//                                     </IconButton>
//                                     <IconButton
//                                         color="primary"
//                                         href="https://instagram.com"
//                                     >
//                                         <Instagram />
//                                     </IconButton>
//                                     <IconButton
//                                         color="primary"
//                                         href="https://twitter.com"
//                                     >
//                                         <Twitter />
//                                     </IconButton>
//                                 </Box>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </Box>

//             {/* Form Submission Notification */}
//             <Snackbar
//                 open={isFormSubmitted}
//                 autoHideDuration={5000}
//                 onClose={handleCloseNotification}
//             >
//                 <Alert onClose={handleCloseNotification} severity="success">
//                     Message sent successfully!
//                 </Alert>
//             </Snackbar>
//         </Container>
//         </Box>
//     );
// };

// export default ContactUs;
