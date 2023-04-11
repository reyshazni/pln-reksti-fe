import Image from "next/image";
import { Inter } from "next/font/google";
import { attachDataListener1, attachDataListener2 } from "../util/firebase";
import { useEffect, useState } from "react";
import { auth } from "../util/firebase";
import plnLogo from '../assets/images/logo_pln.png'
import dataLogo from '../assets/images/logo_data.png'
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import { useRouter } from "next/router";
import { signOut,  onAuthStateChanged } from "firebase/auth";




const inter = Inter({ subsets: ["latin"] });

type DataType = {
  data: string;
  timestamp: string;
};

type ListData = [DataType]

export default function Home() {
  const [data1, setData1] = useState("0");
  const [data2, setData2] = useState({} as DataType);
  const [listData, setListData] = useState([] as DataType[])
  const [userName, setUserName] = useState<string | null>("")
  const [userImage, setUserImage] = useState<string>("")

  const route = useRouter()

  const googleSignOut = () => {
    signOut(auth).then(() => {
      route.push("/login")
      localStorage.removeItem("email")
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    attachDataListener1(setData1);
    attachDataListener2(setData2, setListData, listData);
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
  }, []);

  return (
    <main className="flex min-h-screen bg-[#F8FAFB] ">
      <div className="pt-8 px-10 bg-white font-alata shadow-md">
        <div className="flex items-center gap-2.5 mb-[30px]">
          <Image src={plnLogo} alt="Logo PLN" />
          <p className="text-black text-lg whitespace-nowrap font-bold">Maintenance System</p>
        </div>
        <div className="flex items-center gap-3.5 bg-[#EDF4FF] px-[25px] py-[15px] rounded-xl">
          <i className="fa-solid fa-house text-xl text-[#0561FC]"></i>
          <p className="text-[#0561FC]">Dashboard</p>
        </div>
        <div className="flex items-center gap-3.5 px-[25px] py-[15px] rounded-xl">
          <i className="fa-solid fa-gear text-xl text-[#AEB9BE]"></i>
          <p className="text-[#AEB9BE]">Maintenance</p>
        </div>
        <div className="flex items-center gap-3.5 px-[25px] py-[15px] rounded-xl">
          <i className="fa-solid fa-house text-xl text-[#AEB9BE]"></i>
          <p className="text-[#AEB9BE]">Dashboard</p>
        </div>
      </div>
      <div className="font-spartan py-[35px] px-[48px]">
        <p className=" text-black text-xl font-bold">Analytics</p>
        <div className="grid grid-cols-4 grid-rows-4 gap-5">
          <div className="bg-white rounded-xl px-[17px] py-[34px] flex gap-3 shadow-md">
            <div>
              <Image src={dataLogo} alt="Data Logo"/>
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-[#93A3AB] text-sm">Real-time vibration</p>
              <p className="text-black text-2xl font-bold leading-[0]">{data2.data} mm</p>
            </div>
          </div >
          <div className="bg-white rounded-xl px-[17px] py-[34px] flex gap-3 shadow-md">
            <div>
              <Image src={dataLogo} alt="Data Logo"/>
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-[#93A3AB] text-sm">Real-time vibration</p>
              <p className="text-black text-2xl font-bold leading-[0]">{data2.data} mm</p>
            </div>
          </div >
          <div className="bg-white rounded-xl px-[17px] py-[34px] flex gap-3 shadow-md">
            <div>
              <Image src={dataLogo} alt="Data Logo"/>
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-[#93A3AB] text-sm">Real-time vibration</p>
              <p className="text-black text-2xl font-bold leading-[0]">{data2.data} mm</p>
            </div>
          </div >
          <div className="bg-white rounded-xl px-[17px] py-[34px] flex gap-3 shadow-md">
            <div>
              <Image src={dataLogo} alt="Data Logo"/>
            </div>
            <div className="flex flex-col justify-around">
              <p className="text-[#93A3AB] text-sm">Real-time vibration</p>
              <p className="text-black text-2xl font-bold leading-[0]">{data2.data} mm</p>
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
              <p className="text-[#0561FC] text-center">{userName}</p>
            </div>
            <Image src={userImage} width={100} height={100} alt="User Image" className="rounded" />
            <button onClick={googleSignOut} className="bg-[#fed7d7] px-[20px] py-[5px] rounded-lg">
              <p className="text-[#FB7B7B] font-bold text-lg">Log Out</p>
            </button>
          </div>
        </div>


        
      </div>
    </main>
  );
}