import { combineReducers } from 'redux';
import { reducer as contactForm } from 'redux-form';

export default combineReducers({
  form: contactForm
});
