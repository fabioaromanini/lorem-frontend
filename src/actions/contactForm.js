import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env;

export const submitForm = form => async dispatch => {
  try {
    await axios.post(`${REACT_APP_BACKEND_URL}/email`, form);

    return dispatch({
      type: 1,
      payload: 'FORM_SUBMITED'
    });
  } catch (e) {
    console.log(e);
    return dispatch({
      type: 2,
      payload: 'FORM_FAILED'
    });
  }
};
