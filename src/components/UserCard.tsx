import { Box, Card, Paper } from "@mui/material"



const UserCard=({type,color}:{type:string,color:string})=> {
  return (
    
        <Box sx={{p:2}} >
        <Card style={{height:230,width:200,margin:10,padding:10,background:color}}>
            <h1>{type}s</h1>
        </Card>
        </Box>
    
  )
}

export default UserCard