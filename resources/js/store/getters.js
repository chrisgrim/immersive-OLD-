    let getters = {
         events: state => {
             return state.events
         },
         userSearchRequest: state => {
         	return state.userSearchRequest
         },
         user: state => state.user
    }

    export default  getters