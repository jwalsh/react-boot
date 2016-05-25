import { reducer } from 'redux-modifiers'

export default reducer({
  'foo': (state, action)=>{
    return {foo: action.payload}
  }
}, {})
