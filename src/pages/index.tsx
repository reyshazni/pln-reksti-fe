import Image from "next/image";
import { Inter } from "next/font/google";
import { attachDataListener } from "../util/firebase";
import { useEffect, useState } from "react";
import { auth } from "../util/firebase";
import dataLogo from '../assets/images/logo_data.png'
import dateLogo from "../assets/images/logo_date.png"
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import { useRouter } from "next/router";
import { signOut,  onAuthStateChanged } from "firebase/auth";
import { Select } from '@chakra-ui/react'
import Sidebar from "@/components/Sidebar";
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




const inter = Inter({ subsets: ["latin"] });

type DataType = {
  data: string;
  timestamp: string;
  next_maintenance: number,
};

type MaintenanceData = {
  component : string,
  date : string,
  id : string,
  status : string,
  type : string
}

type MaintenanceDate = {
  boiler : number,
  sootblower : number
}

type ListData = [DataType]

export default function Home() {
  const [data, setData] = useState({} as DataType);
  const [listData, setListData] = useState([] as DataType[])
  const [userName, setUserName] = useState<string | null>("")
  const [userImage, setUserImage] = useState<string>("")
  const [engineStatus, setEngineStatus] = useState(true)
  const [currEngine, setCurrEngine] = useState("Boiler")
  const [maintenanceData, setMaintenanceData] = useState([] as MaintenanceData[])
  const [maintenanceDate, setMaintenanceDate] = useState({} as MaintenanceDate)


  const route = useRouter()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      route.push("/login")
      localStorage.removeItem("email")
    }).catch((error) => {
      console.log(error)
    })
  }

  const sortByDate = (list : MaintenanceData[]) : MaintenanceData[] => {

    list.sort((a, b) => {
      const dateA = new Date(a.date.replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2})\.(\d{2})\.(\d{2})/, '$2/$1/$3 $4:$5:$6')).getTime();
      const dateB = new Date(b.date.replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2})\.(\d{2})\.(\d{2})/, '$2/$1/$3 $4:$5:$6')).getTime();

      // compare the dates
      return dateA - dateB;
    });
    console.log(list)
    return list

  }


  const getMaintenanceDate = (increment : number) : string => {
    let date = new Date();
    date.setDate(date.getDate() + increment);

    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    if (dd < 10) dd = 0 + dd;
    if (mm < 10) mm = 0 + mm;
    return `${dd}-${mm}-${yyyy}`
  }

  const getDaysToMaintenance = (seconds: number) : number => {
    const days = Math.floor(seconds / (3600*24))
    return days
  }

  useEffect(() => {
    attachDataListener(currEngine,setData, setListData, listData, setMaintenanceDate);    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName)
        if (user.photoURL) {
          setUserImage(user.photoURL)
        }
      } else {
        route.push("/login")
      }
    });
    const fetch = async () => {
      const colRef = collection(firestore,"maintenances")
      const docsSnap = await getDocs(colRef)
      const list = [] as MaintenanceData[]
      docsSnap.forEach((doc) => {
        list.push(doc.data() as MaintenanceData)
        
      })
      setMaintenanceData(list)
    };
    fetch();
  }, [currEngine]);

  return (
    <main className="flex min-h-screen bg-[#F8FAFB] ">
      <div className="pt-8 px-10 bg-white font-alata shadow-md">
        <Sidebar />
      </div>
      <div className="font-spartan py-[35px] px-[48px]">
        <div className="flex items-center gap-4 mb-4">
          <p className=" text-black text-xl font-bold">Analytics</p>
          <Select borderRadius={"50"} borderColor={"black"} width={"50"} padding={0} onChange={(e) => setCurrEngine(e.target.value)}>
            <option value='Boiler'>Boiler</option>
            <option value='Sootblower'>Sootblower</option>
          </Select>
        </div>
        
        <div className="grid grid-cols-4 grid-rows-4 gap-5">
          <div className="bg-white rounded-xl px-[17px] py-[34px] flex gap-3 shadow-md">
            {engineStatus ? (
            <>
              <div className="h-[55px] w-[55px] bg-[#E6FDE6] rounded-full">
              </div>
              <div className="flex flex-col justify-around">
                
                <p className="text-[#93A3AB] text-sm">Status</p>
                <p className="text-black text-2xl font-bold leading-[0]">On</p>
              </div>
            </>) : (
            <>
              <div className="h-[55px] w-[55px] bg-[#FED8D8] rounded-full">
              </div>
              <div className="flex flex-col justify-around">
                
                <p className="text-[#93A3AB] text-sm">Status</p>
                <p className="text-black text-2xl font-bold leading-[0]">Off</p>
              </div>
            </>)}
            
          </div >
          <div className="bg-white rounded-xl px-[17px] py-[34px] flex gap-3 shadow-md">
            <div>
              <Image src={dataLogo} alt="Data Logo"/>
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-[#93A3AB] text-sm">Real-time vibration</p>
              <p className="text-black text-2xl font-bold leading-[0]">{data.data} mm</p>
            </div>
          </div >
          <div className="bg-white rounded-xl px-[17px] py-[34px] flex gap-3 shadow-md">
            <div>
              <Image src={dateLogo} alt="Data Logo"/>
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-[#93A3AB] text-sm whitespace-nowrap">{"Day(s) to maintenance"}</p>
              <p className="text-black text-2xl font-bold leading-[0]">{currEngine==="Boiler" ? getDaysToMaintenance(maintenanceDate.boiler) : getDaysToMaintenance(maintenanceDate.sootblower)} day(s)</p>
            </div>
          </div >
          <div className="bg-white rounded-xl px-[17px] py-[34px] flex gap-3 shadow-md">
            <div>
              <Image src={dateLogo} alt="Data Logo"/>
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-[#93A3AB] text-sm">Maintenance date</p>
              <p className="text-black text-2xl font-bold leading-[0]">{currEngine==="Boiler" ? getMaintenanceDate(getDaysToMaintenance(maintenanceDate.boiler)) : getMaintenanceDate(getDaysToMaintenance(maintenanceDate.sootblower))}</p>
            </div>
          </div >
          <div className="bg-white p-6 rounded-xl col-span-3 row-span-3 shadow-md">
            <p className="font-spartan text-black text-lg font-bold">Trend Line</p>
            <AreaChart width={700} height={300} data={listData.slice(1).slice(-60)}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9FC1FB" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#9FC1FB" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="timestamp"  />
              <YAxis domain={[0, 1.2]} axisLine={false} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="data" stroke="#9FC1FB" fillOpacity={1} fill="url(#colorUv)" strokeWidth={4} />
            </AreaChart>
          </div>
          <div className="col-span-1 row-span-2 bg-white flex flex-col justify-center items-center rounded-xl shadow-md gap-[20px]">
            <div>
              <p className="text-black text-center">Welcome,</p>
              <p className="text-[#0561FC] text-center">{userName ? userName : "Admin"}</p>
            </div>
            {userImage ? 
            (<>
              <Image src={userImage} width={100} height={100} alt="User Image" className="rounded-xl" />
            </>) : (<>
              <i className="fa-solid fa-user-tie text-[100px] text-[#0561FC]"></i>
            </>)}
            <button onClick={handleSignOut} className="bg-[#fed7d7] px-[20px] py-[5px] rounded-lg shadow-md">
              <p className="text-[#FB7B7B] font-bold text-lg">Log Out</p>
            </button>
          </div>
        </div>
        <div className='font-alata mt-[38px]'>
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
                {sortByDate(maintenanceData).slice(0,3).map((data) => (
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
      </div>
    </main>
  );
}