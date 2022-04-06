import { useState } from "react";
import useStyles from "./styles";
import {TextField,Button,Typography,Paper} from "@material-ui/core"
import FileBase from "react-file-base64";
import {useDispatch} from "react-redux"
import {createPost} from "../../actions/posts.js"
const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    let classes = useStyles();
    let disptach= useDispatch();

    let handleChange=(e) =>{
         let name=e.target.name;
         let value=e.target.value;
         setPostData({...postData,[name]:value});
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(postData);
        disptach(createPost(postData))
    };

    let clear=()=>{
        setPostData({
            creator:"",title:"",message:"",tags:""
        })
    }

  return (
    <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Memory</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={handleChange}/>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={handleChange}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={handleChange}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={handleChange}/>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={(base64)=>setPostData({...postData,selectedFile:base64})} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper>
  )
}

export default Form