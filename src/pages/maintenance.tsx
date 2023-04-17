import Sidebar from '@/components/Sidebar'
import React, { useEffect, useState } from 'react'
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
import Chips from '@/components/Chips';

// component
// "Sootblower"
// (string)
// date
// "17/4/2023"
// id
// "LapzsGb5WMRD7nxwkYkt"
// status
// "On request"
// type
// "Check-up"

type MaintenanceData = {
  component : string,
  date : string,
  id : string,
  status : string,
  type : string
}


function Maintenance() {
  const [maintenanceData, setMaintenanceData] = useState([] as MaintenanceData[])

  useEffect(() => {
    const fetchProducts = async () => {
      const colRef = collection(firestore,"maintenances")
      const docsSnap = await getDocs(colRef)
      const list = [] as MaintenanceData[]
      docsSnap.forEach((doc) => {
        list.push(doc.data() as MaintenanceData)
        
      })
      setMaintenanceData(list)
      console.log(list)
    };
    fetchProducts();
  },[])
  return (
    <main className="flex min-h-screen bg-[#F8FAFB]">
        <div className="pt-8 px-10 bg-white font-alata shadow-md">
            <Sidebar />
        </div>
        <div className='font-alata py-[35px] px-[48px]'>
          <p className="mb-[15px] text-black text-xl font-bold">Maintenance history</p>
          <div className='bg-white rounded-xl px-[70px] py-[50px] shadow-md'>
          <TableContainer>
            <Table variant='simple' size='lg'>
              <Thead bgColor={"#F7F9FA"}>
                <Tr textColor={"#A6A9AA"}>
                  <Th textTransform={"capitalize"}>Component</Th>
                  <Th textTransform={"capitalize"}>Maintenance date</Th>
                  <Th textTransform={"capitalize"}>Type</Th>
                  <Th textTransform={"capitalize"}>Status</Th>

                </Tr>
              </Thead>
              <Tbody>
                {maintenanceData.map((data) => (
                  <>
                    <Tr>
                      <Td>{data.component}</Td>
                      <Td textColor={"#A6A9AA"}>{data.date}</Td>
                      <Td>{data.type}</Td>
                      <Td><Chips status={data.status} /></Td>
                    </Tr>
                  </>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          </div>
        </div>
    </main>
  )
}

export default Maintenance