import React from "react"
import logo1 from "../assets/logo2.png"
import profile from "../assets/profile.png"
import "./Navbar.css"

const Navbar = () => {

    return (

        <div id="box" className="backdrop-opacity-10~" >
            <div className=" flex justify-evenly">

                <img src={logo1} className=" rounded-2xl border-zinc-50" alt="" />
                <img src={profile} className="p-2 rounded-2xl border-zinc-50" alt="" />
            </div>
            <div>
                <div>
                    <button>Home</button><button>Category</button>

                </div>
                <div>
                    <button>Cart</button><button>Order</button>
                </div>
            </div>
            <div>
                <input type="text" />
                <img src="" alt="" />
            </div>
        </div>


    )
}
export default Navbar;