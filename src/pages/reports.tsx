import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../util/firebase";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import Sidebar from '@/components/Sidebar';

// engine
// : 
// "Boiler"
// id
// : 
// "kwiJiNviBWyEHzjW2yaE"
// timestamp
// : 
// "17/4/2023, 01.34.25"
// vibration
// : 
// 0.97

type ReportData = {
  engine : string,
  id : string,
  timestamp : string,
  vibration : number
}



export default function Reports() {
  const [reportData, setReportData] = useState([] as ReportData[])

  const route = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      // services.map((service) => dispatch(getProducts(service)));
      const colRef = collection(firestore,"reports")
      const docsSnap = await getDocs(colRef)
      const list = [] as ReportData[]
      docsSnap.forEach((doc) => {
        list.push(doc.data() as ReportData)
        
      })
      setReportData(list)
    };
    fetchProducts();
  },[])

  return (
    <main className="flex min-h-screen bg-[#F8FAFB] ">
      <div className="pt-8 px-10 bg-white font-alata shadow-md">
        <Sidebar />
        {/* <div className="flex items-center gap-2.5 mb-[30px]">
          <Image src={plnLogo} alt="Logo PLN" />
          <p className="text-black text-lg whitespace-nowrap font-bold">Maintenance System</p>
        </div>
        <div className={`flex items-center gap-3.5 px-[25px] py-[15px] rounded-xl cursor-pointer hover:bg-[#EDF4FF] ${route.pathname === "/" ? "bg-[#EDF4FF]" : ""}`}  onClick={() => route.push("/")}>
          <i className={`fa-solid fa-house text-xl ${route.pathname === "/" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}></i>
          <p className={`${route.pathname === "/" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}>Dashboard</p>
        </div>
        <div className="flex items-center gap-3.5 px-[25px] py-[15px] rounded-xl cursor-pointer hover:bg-[#EDF4FF]">
          <i className="fa-solid fa-gear text-xl text-[#AEB9BE]"></i>
          <p className="text-[#AEB9BE]">Maintenance</p>
        </div>
        <div className={`flex items-center gap-3.5 px-[25px] py-[15px] rounded-xl ml-[0.2rem] cursor-pointer hover:bg-[#EDF4FF] ${route.pathname === "/reports" ? "bg-[#EDF4FF]" : ""}`}>
          <i className={`fa-solid fa-file-lines text-xl ${route.pathname === "/reports" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}></i>
          <p className={`${route.pathname === "/reports" ? "text-[#0561FC]" : "text-[#AEB9BE]"}`}>Reports</p>
        </div> */}
      </div>
      <div className='font-alata py-[35px] px-[48px]'>
        <p className="mb-[15px] text-black text-xl font-bold">Anomaly reports</p>
        <div className='bg-white rounded-xl px-[70px] py-[50px] shadow-md'>
          <TableContainer>
            <Table variant='simple' size='lg'>
              <Thead bgColor={"#F7F9FA"}>
                <Tr textColor={"#A6A9AA"}>
                  <Th textTransform={"capitalize"}>Component</Th>
                  <Th textTransform={"capitalize"}>Date</Th>
                  <Th textTransform={"capitalize"}>Vibration</Th>
                </Tr>
              </Thead>
              <Tbody>
                {reportData.map((data) => (
                  <>
                    <Tr>
                      <Td>{data.engine}</Td>
                      <Td textColor={"#A6A9AA"}>{data.timestamp}</Td>
                      <Td>{data.vibration}</Td>
                    </Tr>
                  </>
                ))}

                {/* <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td>0.91444</Td>
                </Tr> */}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </main>
  )
}