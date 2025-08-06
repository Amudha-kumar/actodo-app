import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function LogIn(props) {
    const [Username, setUsername] = useState()
    const [password, setpassword] = useState()
    const [ruser, setRuser] = useState(true)
    var userfound = false

    const navigate = useNavigate()
    const users = props.users

    function HandleUInput(evt) {
        setUsername(evt.target.value)
    }
    function HandleUPassword(evt) {
        setpassword(evt.target.value)
    }
    function CheckUser() {
        users.forEach(function (item) {
            if (item.username.trim() === Username.trim() && item.password.trim() === password.trim()) {
                console.log("Login sucessfully")
                userfound = true
                navigate("/landingpage",{state:{user:Username}})
            }

        })
        if (userfound === false) {
            console.log("Login failed")
            setRuser(false)
        }

    }




    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-2xl font-medium">Hey Hi </h1>
                {ruser ? <p>I help you manage your activities after you login :) </p> : <p className="text-red-500">Please sign Up before you login</p>}



                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="Username"
                        onChange={HandleUInput}></input>

                    <input type="text"
                        className="w-52 border border-black p-1 bg-transparent rounded-md"
                        placeholder="password"
                        onChange={HandleUPassword} ></input>



                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={CheckUser}>Login in</button>

                    <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link> </p>

                </div>

            </div>
        </div>
    )
}
export default LogIn