const defaultState = {
    focused: false
  };
  
  export default (state = defaultState, action) => {
    if (action.type === 'seatch_focus') {
      return {
        focused: true
      }
    }
    if (action.type === 'search_blue') {
      return {
        focused: false
      }
    }
    return state;
  };
  