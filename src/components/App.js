import axios from 'axios'
import {useState} from 'react'
import List from './List'
import '../style/style.css'
import logo from '../images/logo.png'
import page1 from '../images/Page-1.png'
const App = () =>{

  
            const [name,setName] = useState('')
            const [nominee,setNominee] = useState('')
            const [adhaar,setAdhaar] = useState('')
            const [formSubmission,setFormSubmission]=useState({})

            const handleSubmit=(e)=>{
                e.preventDefault()
                const formData={
                    name,
                    nominee,
                    adhaar
                }
                axios.post('http://127.0.0.1:3088/api/userdetails',formData)
                .then((response)=>{
                   setFormSubmission(response.data)
                   alert("Successfully Submitted")
                   setName('')
                   setNominee('')
                   setAdhaar('')
                })
                .catch((err)=>{

                })
            }
            return(
                <div>
                    <img alt="logo" id='logo' src={logo}/>
                <div className='container'>
                    <img alt="page1" src={page1}/>
                    
                    <List formSubmission={formSubmission}/>
                    <form onSubmit={handleSubmit}>
                        <h1 id='heading'>Add Nominee</h1>
                        <p>Select below option</p>
                        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Nominee name'/>
                        <br/>
                        <br/>
                        <select value={nominee} onChange={(e)=>{setNominee(e.target.value)}}>
                            <option value=''>Nominee Relation</option>
                            <option value='father'>Father</option>
                            <option value='mother'>Mother</option>
                            <option value='son'>Son</option>
                        </select>
                        <br/>
                        <br/>
                        <input type='number' value={adhaar} onChange={(e)=>{setAdhaar(e.target.value)}} placeholder='Nominee Adhaar Number'/>
                        <br/>
                        <br/>
                        
                        <button>Submit</button>
                       
                        </form>
                       
                 </div>
                 </div>
                 
            )
        }
    


export default App