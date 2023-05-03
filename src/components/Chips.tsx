import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../util/firebase";


type Props = {
  data : {
    component : string,
    date : string,
    id : string,
    status : string,
    type : string
  }
}

type MaintenanceData = {
  component : string,
  date : string,
  id : string,
  status : string,
  type : string
}

function Chips({data}:Props) {

  const [maintenanceState, setMaintenanceState] = useState(data.status)

  const handleStatusChange = async (newStatus : string) => {
    const maintenanceDocRef = doc(firestore,"maintenances", data.id)
    await updateDoc(maintenanceDocRef, {
      "status": newStatus,
    });
    setMaintenanceState(newStatus)
  }

  const setChipBgColor = () : string => {
    let bgColor = ""
    if (maintenanceState === "On request") {
      bgColor = "#DFF0FF"
    } else if (maintenanceState === "Done") {
      bgColor = "#E6FDE6"
    } else {
      bgColor = "#FED8D8"
    }
    return bgColor
  }

  const setChipTextColor = () : string => {
    let textColor = ""
    if (maintenanceState === "On request") {
      textColor = "#0561FC"
    } else if (maintenanceState === "Done") {
      textColor = "#78C278"
    } else {
      textColor = "#FB7B7B"
    }
    return textColor
  }

  let res = (<></>)
  if (data.status === "On request") {
    res = 
    (<>
        <Select placeholder='On request' borderRadius={50} border={'none'} boxShadow={'none'} bgColor={setChipBgColor()} textColor={setChipTextColor()} onChange={(e) => handleStatusChange(e.target.value)}>
          <option value='Done'>
            Done
          </option>
          <option value='Canceled'>
            Canceled
          </option>
        </Select>
    </>)
  } else if (data.status === "Done"){
    res = 
    (<>
        <Select placeholder='Done' borderRadius={50} border={'none'} boxShadow={'none'} bgColor={setChipBgColor()} textColor={setChipTextColor()} onChange={(e) => handleStatusChange(e.target.value)}>
          <option value='On request'>
            On request
          </option>
          <option value='Canceled'>
            Canceled
          </option>
        </Select>
    </>)

  } else if (data.status === "Canceled") {
    res = 
    (<>
        <Select placeholder='Canceled' borderRadius={50} border={'none'} boxShadow={'none'} bgColor={setChipBgColor()} textColor={setChipTextColor()} onChange={(e) => handleStatusChange(e.target.value)}>
          <option value='Done'>
            Done
          </option>
          <option value='On request'>
            On request
          </option>
        </Select>
    </>)
  }
  return res
}

export default Chips