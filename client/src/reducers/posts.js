const reducer=(posts=[],action)=>{
   switch (action.type) {
       case "FETCH_CALL":
           return posts;
        case "CREATE":
           return [...posts,action.payload];
       default:
           return posts;
   }
}

export default reducer;