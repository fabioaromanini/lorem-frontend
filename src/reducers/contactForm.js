const defaultState = {
  email: 'Email@reducer.com',
  name: 'name do reducer',
  message: 'measasage do reahauideaedbdads'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 1:
      return {
        name: '',
        email: '',
        message: ''
      };
    default:
      return state;
  }
};
