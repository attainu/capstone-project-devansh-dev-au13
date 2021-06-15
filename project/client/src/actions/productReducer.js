export const getAllProducts=()=>dispatch=>{
    dispatch({type:'GET_PRODUCTS_REQUEST'})

    axios.get('/api/products/getallproducts').then(res=>{
        console.log(res);
        setproducts(res.data)
        dispatch({type:'GET_PRODUCTS_SUCCESS',payload:res.data})
    }).catch(err=>{
        console.log(err);
        dispatch({type:'GET_PRODUCTS_FAILED',payload:err})
        
    })
}