import React from 'react'

type Props = {
    status : string
}

function Chips({status}:Props) {
  let res = (<></>)
  if (status === "On request") {
    res = 
    (<>
        <div className='bg-[#DFF0FF] py-[3px] rounded-xl w-[90px]'>
            <p className='text-[#0561FC] text-[12px] font-bold text-center'>{status}</p>
        </div>
    </>)
  } else if (status === "Done"){
    res = 
    (<>
        <div className='bg-[#E6FDE6] py-[3px] rounded-xl w-[90px]'>
            <p className='text-[#78C278] text-[12px] font-bold text-center'>{status}</p>
        </div>
    </>)

  } else if (status === "Canceled") {
    res = 
    (<>
        <div className='bg-[#FED8D8] py-[3px] rounded-xl w-[90px]'>
            <p className='text-[#FB7B7B] text-[12px] font-bold text-center'>{status}</p>
        </div>
    </>)
  }
  return res
}

export default Chips