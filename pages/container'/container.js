import {authenticate,unauthenticate} from '../action/action'

export let mapDispatchToProps=(dispatch)=>{
    return {
       authenticate:(userName)=>{
            dispatch(authenticate(userName))
       },
       unAuthenticate:()=>{
            dispatch(unauthenticate())
       }
    }
}

export let mapStateToProps=(state)=>{
    return {
        userName :state.userName 
    }
}