import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp(props) {
    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()


    const [Username, setUsername] = useState()
    const [password, setpassword] = useState()

    function HandleUInput(evt)
    {
      setUsername(evt.target.value)
    }
    function HandleUPassword(evt)
    {
      setpassword(evt.target.value)
    }

    function AddUser()
{
     setusers([...users,{username:Username,password:password}])
     navigate('/')
}

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-2xl font-medium">Hey Hi </h1>
                <p>You can Signup here :) </p>


                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="Username"
                        onChange={HandleUInput}></input>

                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="password"
                        onChange={HandleUPassword}></input>

                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="current password"></input>

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={AddUser}>Sign up</button>

                    <p>Already you have an account? <Link to={"/"}>Login</Link> </p>

                </div>

            </div>
        </div>
    )
}
export default SignUp