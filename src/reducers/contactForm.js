const defaultState = {
  email: 'Email@reducer.com',
  name: 'name do reducer',
  message: 'measasage do reahauideaedbdads'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 1:
      return {
        name: 'Email enviado!',
        email: 'NÃO ENVIA DE NOVO NÃO',
        message: 'Valeu'
      };
    case 2:
      return {
        name: 'Num deu, tenta de novo',
        email: 'tenta@denovo.com',
        message: 'foi mal'
      };
    default:
      return state;
  }
};
