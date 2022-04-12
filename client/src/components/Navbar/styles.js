// import { deepPurple } from '@material-ui/core/colors';
// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 0',
//     padding:"5px 50px",
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   heading: {
//     color: 'rgba(0,183,255, 1)',
//     textDecoration:"none",
//     // textAlign: 'center',
   
//   },
//   image: {
//     marginLeft: '15px',
//   },
//   toolbar:{
//     display: 'flex',
//     justifyContent: 'flex-end',
//     width:"400px",
//   }, 
//   profile:{
//     display:"flex", 
//     justifyContent:'space-between',
//     width:"400px",
//   },
//   userName: {
//     display: 'flex',
//     alignItems: 'center',
//   }, 
//   brandContainer:{ 
//     display: 'flex',
//     alignItems: 'center',
//   }, 
//   purple: {
//     color:theme.palette.getContrastText(deepPurple[500]),
//     backgroundColor:deepPurple[500]
//   }
// }));

import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: "#485460",
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
    fontSize:"3.25rem",
    [theme.breakpoints.down('sm')]:{
      fontSize:'2.75rem'
    },
    [theme.breakpoints.down('xs')]:{
      fontSize:'1.75rem'
    }
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));