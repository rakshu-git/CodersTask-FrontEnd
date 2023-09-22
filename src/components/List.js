import axios from 'axios'
import {useState,useEffect} from 'react'
import '../style/style.css'
const List = (props) =>{
    const {formSubmission} = props
    const [data,setData]=useState({})
            useEffect(()=>{
                if(formSubmission._id){
                    axios.get(`http://127.0.0.1:3088/api/userdetails/${formSubmission._id}`)
                    .then((response)=>{
                      setData(response.data)
                    })
                    .catch((err)=>{
                        console.log(err.message)
                    })
                }
            },[formSubmission])
    return(
        <div className='list'>
             {data._id && (
                <div>

                    <h2>{data.name}</h2>
                    <h2>{data.nominee}</h2>
                    <h2>{data.adhaar}</h2>
                </div>
             )}  
                       
                        
                </div>
                    )
                
    
}

export default List