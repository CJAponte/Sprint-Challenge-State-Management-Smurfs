import axios from 'axios';

export const LOADING = "LOADING";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const GET_SMURFS = "GET_SMURFS";

export const addSmurf = (newSmurf) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: "Smurf was unable to be added."})
      })
  }
}
 
export const getSmurfs = () => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: "Could not retreive Smurf."})
      })
  }
}

export const updateSmurf = (updatedSmurf) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: `This Smurf can't be updated.`})
      })
  }
}

export const deleteSmurf = (id) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({type: GET_SMURFS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: "This Smurf cannot be deleted."})
      })
  }
}