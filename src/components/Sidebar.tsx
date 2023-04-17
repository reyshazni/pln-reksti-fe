import React from 'react'
import plnLogo from '../assets/images/logo_pln.png'
import Image from "next/image";
import { useRouter } from "next/router";


function Sidebar() {
  const route = useRouter()
  return (
    <>
        <div className="flex items-center gap-2.5 mb-[30px]">
            <Image src={plnLogo} alt="Logo PLN" />
            <p className="text-black text-lg whitespace-nowrap font-bold">Maintenance System</p>
        </div>
        <div className={`flex items-center gap-3.5 px-[25px] py-[15px] rounded-xl cursor-pointer hover:bg-[#EDF4FF] ${route.pathname === "/" ? "bg-[#EDF4FF]" : ""}`}  onClick={() => route.push("/")}>
            <i className={`fa-solid fa-house text-xl ${route.pathname === "/" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}></i>
            <p className={`${route.pathname === "/" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}>Dashboard</p>
        </div>
        <div className={`flex items-center gap-3.5 px-[25px] py-[15px] rounded-xl cursor-pointer hover:bg-[#EDF4FF] ${route.pathname === "/maintenance" ? "bg-[#EDF4FF]" : ""}`} onClick={() => route.push("/maintenance")}>
            <i className={`fa-solid fa-gear text-xl ${route.pathname === "/maintenance" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}></i>
            <p className={`${route.pathname === "/maintenance" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}>Maintenance</p>
        </div>
        <div className={`flex items-center gap-3.5 px-[25px] py-[15px] rounded-xl ml-[0.2rem] cursor-pointer hover:bg-[#EDF4FF] ${route.pathname === "/reports" ? "bg-[#EDF4FF]" : ""}`} onClick={() => route.push("/reports")}>
            <i className={`fa-solid fa-file-lines text-xl ${route.pathname === "/reports" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}></i>
            <p className={`${route.pathname === "/reports" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}>Reports</p>
        </div>
    </>
  )
}

export default Sidebar