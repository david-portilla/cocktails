import React, {useContext, useState} from 'react'
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import {ModalContext} from '../context/ModalContext'
// import {ModalConsumer} from '../context/ModalContext';

function getModalStyle () {
  const top = 50;
  const left = 50;

  return {
    top: `${ top }%`,
    left: `${ left }%`,
    transform: `translate(-${ top }%, -${ left }%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export const Recipe = ({recipe}) => {
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const {setIdRecipe} = useContext(ModalContext)

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img
          src={recipe.strDrinkThumb}
          alt={recipe.strDrink}
          className="card-img-top" />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={
              () => {
                setIdRecipe(recipe.idDrink)
                handleOpen()
              }
            }
          >
            View recipe
          </button>

          <Modal
            open={open}
            onClose={() => {
              setIdRecipe(null)
              handleClose()
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h1>open modal</h1>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}
