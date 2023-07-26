const User = require('../models/user');
const Post = require("../models/Post");

exports.uploadProfilePicture = async (req, res) => {
    try {
        console.log("Uploading new profile picture...");

        const { email, profilePicture } = req.body;
        // Find the user by email and update the profile picture
        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            { profilePic: profilePicture },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Profile Picture uploaded to database.');
        res.status(200).json({ message: 'Profile picture uploaded successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading profile picture.', error: error.message });
    }
};

// Helper function to get the total number of posts for a user
const getUserTotalPosts = async (email) => {
    try {
        // Count the number of posts with matching authorId
        console.log('Counting docs:',email);
        const totalPosts = await Post.countDocuments({ authorId: email });
        console.log('Counting totalPosts:',totalPosts);
        return totalPosts;
    } catch (error) {
        throw new Error('Error fetching user total posts');
    }
};

// Controller function to fetch all user profile details
exports.getUserProfileDetails = async (req, res) => {
    try {

        console.log('Fetching User Profile Picture');
        const { email } = req.params;

        // Find the user by email. The Profile picture is already available in this response.
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log('User fetched, fetching total posts');
        // Get the total number of posts for the user
        const totalPosts = await getUserTotalPosts(email);

        // Create a new object to hold only the necessary profile details without totalPosts
        const userProfile = {
            firstName: user.firstName,
            lastName: user.lastName,
            penName: user.penName,
            dob: user.dob,
            gender: user.gender,
            email: user.email,
            contact: user.contact,
            profilePic: user.profilePic,
            enrollmentDate: user.enrollmentDate
        };
        // Add the totalPosts count to the userProfile object
        userProfile.totalPosts = totalPosts;

        // Respond with the user profile details including the total number of posts
        return res.status(200).json(userProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile details', error: error.message });
    }
};