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

  const sortByDate = (list : ReportData[]) : ReportData[] => {

    list.sort((a, b) => {
      const dateA = a.timestamp.split(/\/|, |\./).map(str => parseInt(str, 10));
      const dateB = b.timestamp.split(/\/|, |\./).map(str => parseInt(str, 10));
    
      // Compare year, then month, then day, then hour, then minute, then second
      for (let i = 0; i < dateA.length; i++) {
        if (dateA[i] !== dateB[i]) {
          return dateB[i] - dateA[i];
        }
      }
    
      return 0;
    });
    return list

  }


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
                {sortByDate(reportData).map((data) => (
                  <>
                    <Tr>
                      <Td>{data.engine}</Td>
                      <Td textColor={"#A6A9AA"}>{data.timestamp}</Td>
                      <Td>{data.vibration}</Td>
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