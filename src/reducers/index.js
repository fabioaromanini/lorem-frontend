import { combineReducers } from 'redux';
// import contactForm from './contactForm';
import { reducer as contactForm } from 'redux-form';

export default combineReducers({
  form: contactForm
});
