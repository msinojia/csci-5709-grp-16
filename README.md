<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 

# Assignment 1 (Individual Submission)

Our project is a **travel blog** where travellers can post their experience, and interested readers can view the posts from the others. Complete details about the project are included the group submission.

* *Date Created*: 30 May 2023
* *Last Modification Date*: 30 May 2023
* *Git URL*: [https://git.cs.dal.ca/sinojia/csci_5709_assignments/-/tree/main/Assignment1/travel-blog](https://git.cs.dal.ca/sinojia/csci_5709_assignments/-/tree/main/Assignment1/travel-blog)
* *Netlify Deployment URL*: **[https://sinojia-travel-blog.netlify.app/](https://sinojia-travel-blog.netlify.app/)**

## Authors

Meet Pravinbhai Sinojia (mt845464@dal.ca) - *(Author)*

## Testing

I tested the developed prototype in my laptop with 15" screen (on Mozilla Firefox and Google Chrome browsers). I also checked the website on my mobile phone (iPhone SE 2020). Moreover, I use the functionalities provided by the Firefox browser to simulate how my website will look on large screens (desktop / laptop), medium screens (tablets such as iPad), and small screens (phones of varying sizes).


## Deployment

I pushed the same code (as linked above in my GitLab repository) to GitHub. Then, I connected my GitHub account to Netlify, gave access to the project repository, and deployed it after configuring the build commands (yarn) and website name.

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://react.dev/) - The front-end web framework used
* [Material UI](https://mui.com/) - Library for styling and pre-built React components
* [Yarn](https://yarnpkg.com/) - Dependency Management


## Sources Used

<!--- If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details. --->


### src/Header.js

*Lines 42,  110 - 131*

```
const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

{
  !isSmallerScreen && (
    <>
      <IconButton color="inherit">
        <CreateIcon />
      </IconButton>
      <IconButton color="inherit">
        <PhotoIcon />
      </IconButton>
      <IconButton color="inherit">
        <InfoIcon />
      </IconButton>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>
      <IconButton color="inherit">
        <AccountIcon />
      </IconButton>
      <Button color="inherit" startIcon={<LogoutIcon />}>
        Logout
      </Button>
    </>
  );
}
```

The code above was created by adapting the code in [javascript.works-hub.com](https://javascript.works-hub.com/learn/how-to-create-a-responsive-navbar-using-material-ui-and-react-router-f9a01) as shown below: 

```
const isMobile = useMediaQuery(theme.breakpoints.down("md"));

{
  isMobile ? (
    <DrawerComponent />
  ) : (
    <div className={classes.navlinks}>
      <Link to="/" className={classes.link}>
        Home
      </Link>
      <Link to="/about" className={classes.link}>
        About
      </Link>
      <Link to="/contact" className={classes.link}>
        Contact
      </Link>
      <Link to="/faq" className={classes.link}>
        FAQ
      </Link>
    </div>
  );
}
```

- The above code was implemented by Damilola Adedoyin Ezekiel (author of the article).
- This code was used because I needed a side menubar with a Hamburger icon if the website is opened on a small screen.
- In this case, my code is fairly different as I only needed to understand how it could be done, and then I used my own React components with a similar`if` condition.


### src/Header.js

*Lines 44 - 48, 135 - 139*

```
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const toggleDrawer = () => {
  setIsDrawerOpen(!isDrawerOpen);
};

<NavigationDrawer
  anchor="left"
  isDrawerOpen={isDrawerOpen}
  toggleDrawer={toggleDrawer}
></NavigationDrawer>;
```

The code above was created by adapting the code in [MUI - Responsive Drawer](https://mui.com/material-ui/react-drawer/#responsive-drawer) as shown below: 

```
const [mobileOpen, setMobileOpen] = React.useState(false);

const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
};

<Drawer
  container={container}
  variant="temporary"
  open={mobileOpen}
  onClose={handleDrawerToggle}
  ModalProps={{
    keepMounted: true, // Better open performance on mobile.
  }}
  sx={{
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
  }}
>
  {drawer}
</Drawer>;
```

- The above code was implemented by MUI Documentation.
- This code was used because I wanted the ability to toggle the side menubar on mobile devices.
- I took inspiration from the code by using a similar state management idea.


### src/ScheduleForm.js

*Lines 25 - 31*

```
<LocalizationProvider dateAdapter={AdapterDayjs}>
  <DateTimePicker
    label="Select Date and Time"
    value={selectedDate}
    onChange={(newValue) => setSelectedDate(newValue)}
  />
</LocalizationProvider>;
```

The code above was created by adapting the codes in [MUI - React Date Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/) and [Date and Time Picker](https://mui.com/x/react-date-pickers/date-time-picker/) as shown below: 

```
<DateTimePicker
  label="Uncontrolled picker"
  defaultValue={dayjs('2022-04-17T15:30')}
/>
<DateTimePicker
  label="Controlled picker"
  value={value}
  onChange={(newValue) => setValue(newValue)}
/>
```

```
<LocalizationProvider dateAdapter={AdapterDayjs}>
	<DatePicker />
</LocalizationProvider>
```

- The above code was implemented by MUI Documentation.
- The code was used because I needed a DateTime picker for the scheduling posts functionality.
- I merged the two codes that were given, as each had a feature I needed (I needed to pick both Date and Time, and with a Localization feature to handle different timezones).


### src/FileUploader.js

*Lines 6 - 21, 25 - 42*

```
const [fileError, setFileError] = useState("");

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  accept: {
    "image/*": [],
  },
  onDrop: (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    setFileError("");
    onFileChange(file);
  },
  onDropRejected: () => {
    setFileError("Invalid file type. Please select an image.");
  },
});

// ...

<div {...getRootProps()} style={{ marginBottom: "1rem", textAlign: "center" }}>
  <input {...getInputProps()} />
  {isDragActive ? (
    <p>Drop the image here...</p>
  ) : (
    <p>Drag and drop an image here or click to browse</p>
  )}
  <Button variant="contained">Browse</Button>
  {selectedFile && (
    <p>
      Selected File: {selectedFile.name} ({selectedFile.size} bytes)
    </p>
  )}
  {fileError && <p style={{ color: "red" }}>{fileError}</p>}
</div>;
```

The code above was created by adapting the code in [blog.logrocket.com](https://blog.logrocket.com/create-drag-and-drop-component-react-dropzone/) as shown below: 

```
const [files, setFiles] = useState([]);
const { getRootProps, getInputProps } = useDropzone({
  accept: "image/*",
  onDrop: (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  },
});

// ...

<div {...getRootProps({ className: "dropzone" })}>
  <input {...getInputProps()} />
  <p>Drag 'n' drop some files here, or click to select files</p>
</div>;
```

- The above code was implemented by [Uzochukwu Eddie Odozi](https://blog.logrocket.com/author/uzochukwuodozi/).
- The code was used because I needed the ability to upload a featured image for the blog post.
- I understood how to use React DropZone component from the article, and then made several modifications to make the user experience better (eg. by changing the text when an image is being dragged into the upload area; and by showing an appropriate error if the dragged file is not an image).


### src/Editor.js

*Lines 10 - 58*

```
export const EditorContentChanged = {
  html: "",
};

export const EditorProps = {
  value: "",
  onChange: (changes) => {},
};

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike", "blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  ["link", "image"],
  ["emoji"],
  ["clean"],
];

export default function Editor(props) {
  const [value, setValue] = useState(props.value || "");

  const onChange = (content) => {
    setValue(content);

    if (props.onChange) {
      props.onChange({
        html: content,
      });
    }
  };

  return (
    <ReactQuill
      theme="snow"
      placeholder="Start writing..."
      modules={{
        toolbar: {
          container: TOOLBAR_OPTIONS,
        },
        "emoji-toolbar": true,
        "emoji-textarea": false,
        "emoji-shortname": true,
      }}
      value={value}
      onChange={onChange}
    />
  );
}
```

The code above was created by adapting the code in [codesandbox.io](https://codesandbox.io/s/react-quill-with-markdown-g8193?file=/src/Editor.tsx) as shown below: 

```
export interface EditorContentChanged {
  html: string;
  markdown: string;
}

export interface EditorProps {
  value?: string;
  onChange?: (changes: EditorContentChanged) => void;
}

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike", "blockquote", "link"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  ["emoji"],
  ["clean"],
];

export default function Editor(props: EditorProps) {
  const [value, setValue] = useState<string>(markdownToHtml(props.value || ""));
  const reactQuillRef = useRef<ReactQuill>(null);

  const onChange = (content: string) => {
    setValue(content);

    if (props.onChange) {
      props.onChange({
        html: content,
        markdown: htmlToMarkdown(content),
      });
    }
  };

  return (
    <ReactQuill
      ref={reactQuillRef}
      theme="snow"
      placeholder="Start writing..."
      modules={{
        toolbar: {
          container: TOOLBAR_OPTIONS,
        },
        "emoji-toolbar": true,
        "emoji-textarea": false,
        "emoji-shortname": true,
      }}
      value={value}
      onChange={onChange}
    />
  );
}
```
- The above code was implemented by [acanimal](https://github.com/acanimal).
- This code was used because I needed a custom text editor with various formatting options.
- The code was modified in multiple ways. Firstly, it had to be converted from, TypeScript to JavaScript. Secondly, it had both markdown and HTML support. But I only needed the HTML portion. 


## Images and Icons
- Icons for the header were taken from [Material Icons](https://mui.com/material-ui/material-icons/).
- Background image of the website was taken from this [Unsplash photo](https://unsplash.com/photos/Gl6GljPtJpo).

 
## Acknowledgments

* This website was useful for code formatting: [codebeautify.org/react-formatter](https://codebeautify.org/react-formatter)
* Netlify provides a nice auto-deployment functionality. This made it easy to just push code to GitHub and see changes to the deployment in a minute.
* Once a background image was picked for the website, this site provided helpful colour palette that goes with the theme: [imagecolorpicker.com](https://imagecolorpicker.com/en).
