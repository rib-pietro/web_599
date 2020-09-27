const inititalState = {
  name: 'Pietro Ribeiro',
  email: '',
  password: '',
  company: 'Let\'s Code'
};

const userActionTypes = {
  SET_NAME: 'SET_NAME'
};

const UserReducer = (state = inititalState, action) => {

  switch (action.type) {
    case userActionTypes.SET_NAME:
      return {...state, name: action.payload};
    break;
    default:
      return {...state};
    break;
  }

};

export {userActionTypes, UserReducer as default };