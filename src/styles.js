import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  container:{
    backgroundColor : theme.palette.background,
    padding: theme.spacing(8, 0, 6)
  },
  icon:{
    marginRight: '20px'
  },
  buttons:{
    marginTop: '40px'
  },
  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  CardMedia:{
    paddingTop: '56.25%'
  },
  CardContent:{
    flexGrow: "1"
  },
  footer:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: '50px 0'
  }
}));

export default useStyles