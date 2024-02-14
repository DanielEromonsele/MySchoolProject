import { FaPen } from "react-icons/fa";
import dummy from "../assets/dummy.jpg"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Input from "../components/reUse/Input";
const StudentProfile = () => {
  const [email, setEmail] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  return (
      <div>
          <div className="w-full h-[150px] flex justify-center items-center bg-blue-800 gap-4">
              <div className='h-[100%] w-[80%] relative'>
                  <div className='w-[155px] col-span-3 h-[155px] rounded-full border-4 bg-blue-800 border-white absolute top-[70px] '>
                      <img src={dummy} style={{ objectFit: "cover", borderRadius: "100%" }} />
                      <div className="w-[40px] h-[40px] bg-black bottom-4 rounded-full cursor-pointer  absolute flex justify-center items-center right-0"><FaPen style={{color:"white"}} /></div>
                  </div>
                
              </div>
          </div>
          <br />
          <br /><br /><br /><br />
          <div className="ml-[55px] grid w-[90%] text-[16px] md:w-[50%] grid-cols-2 sm:w-[100%] bg-blue-800">
              <NavLink to="/" className={({ isActive }) => 
            isActive ? "font-medium cursor-pointer text-[17px] text-blue-800" :"font-medium cursor-pointer hover:text-blue-800 text-[17px]"}>
                  My personal details
        </NavLink>
        <NavLink to="/" className={({ isActive }) => 
            isActive ? "font-medium cursor-pointer text-[17px] text-blue-800" :"font-medium cursor-pointer hover:text-blue-800 text-[17px]"}>
                  My school details
              </NavLink>
      </div>
      <div className="ml-[40px] mt-4 grid w-[60%] grid-cols-2 md:w-[90%] sm:w-[100%] ">
        <Input
          placeholder="First name"
          className="w-[87%]  text-black"
          type="name"
          required
          value={firstName}
          onChange={(e: any) => {
            setFirstName(e.target.value);
          }}
        />
        <Input
          placeholder="Last name"
          className="w-[87%]  text-black"
          type="name"
          required
          value={lastName}
          onChange={(e: any) => {
            setLastName(e.target.value);
          }}
        />
      <Input
          placeholder="Last name"
          className="w-[95%] text-black"
          type="name"
          required
          value={lastName}
          onChange={(e: any) => {
            setLastName(e.target.value);
          }}
        />
        <Input
          placeholder="Last name"
          className="w-[95%] ml-8text-black"
          type="name"
          required
          value={lastName}
          onChange={(e: any) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      
     </div>
  )
}

export default StudentProfile