<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Assignment 1

**[About Project]** 

My project is a subscription page built using React. It allows users to subscribe to a service or gain free access to content by providing their name and email. The project includes form validation to ensure that the name and email fields are filled correctly. If the form is valid and the terms and conditions checkbox is checked, users can subscribe or gain free access. Success messages are displayed upon successful subscription or access. Users who are already subscribed can also choose to unsubscribe. The page includes a navigation bar, header, blog image, content section, and footer. It provides a simple and intuitive user interface for managing subscriptions and accessing content.

* *Date Created*: 24 05 2023
* *Last Modification Date*: 27 05 2023
* *gitHub URL*: <https://github.com/pakshal6451/CSCI-5709-ASSIGNMENT1>
* *Gitlab URL*: <https://git.cs.dal.ca/pbshah/csci-5709-assignments>
* *Netlify URL*: <https://pakshal-shah-assignment1-individual.netlify.app/>

## Author
* [Pakshal Shah](pk277027@dal.ca) - *(Developer)*


## Testing

**Manual Testing**: In Manual testing involves manually interacting with the project as an end user would. I have opened the project in a browser and tested different use cases, such as entering valid and invalid inputs, checking for error messages, subscribing, unsubscribing, and accessing the free content. Manual testing helps identify any issues that may have been missed in automated testing.

## Deployment

I have Deployed my project using Netlify.

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://react.dev/) - The web framework used

## Sources Used

### SubscfiptionPage.js

*Lines 33 - 62*

```
 const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Please enter your name.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  }; 

   const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const showSuccessMessage = (message) => {
    alert(message);
  };

```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/70869323/add-e-mail-validation-and-character-limit-using-js) as shown below: 

```
const name = document.getElementById("fname");
const message = document.getElementById("message");
const sub = document.getElementById("subject");
const email = document.getElementById("email")

function validate() {
  var isError = false;
  var errMessage = '';
  if (name.value === "" || name.value == null) {
    isError = true;
    errMessage += "Please Enter Your Name\n";
  }
  if (sub.value === "" || sub.value == null) {
    isError = true;
    errMessage += "Please Enter a Subject\n";
  }
  if (message.value < 40) {
    isError = true;
    errMessage += "Your Message Should be Longer\n";
  }
  console.log(email.value.match(/.*\@.*\.\w{2,3}/g))
  if (email.value === "" || email.value.match(/.*\@.*\.\w{2,3}/g) === null){
    isError = true;
    errMessage += "Please Enter a Valid Email";
  }
  if (isError) {
    alert(errMessage);
    return false;
  } else {
    return true;
  }
}

```

- <!---How---> The code in [stackoverflow](https://stackoverflow.com/questions/70869323/add-e-mail-validation-and-character-limit-using-js) was implemented by a user named philo.
- <!---Why---> [stackoverflow](https://stackoverflow.com/questions/70869323/add-e-mail-validation-and-character-limit-using-js)Code was used because to understad the validation in react js.
- <!---How---> Code was modified by me in my project according to my needs i.e to validate the form.

