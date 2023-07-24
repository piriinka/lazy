import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../../utils'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';





const productsUrl='https://raw.githubusercontent.com/kmagdi/json_images/main/products'

export const Products = () => {
const navigate = useNavigate()

const {data,status,isLoading,isError}=useQuery(['products',productsUrl],getData)
if(isLoading){
  <div><CircularProgress color="inherit" /></div>
    return
}
if(isError){
    <div>Error by fetching products</div>
    return 
}
status == 'success' && console.log(data.products)

  return (

    <Box sx={{maxWidth:400, backgroundColor:'#539feb80', boxShadow:'3px 5px 5px gray', margin:'0px auto'}}>
         <List>
            {status == 'success' && data.products.map(obj=>
                 <ListItem disablePadding key={obj.id} >
            <ListItemButton onClick={()=>navigate('/products/'+obj.id)}>
              <ListItemText primary={obj.name} />
            </ListItemButton>
          </ListItem>
                )}
         
          </List>
    </Box>
  )
}
