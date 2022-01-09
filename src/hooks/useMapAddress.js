import axios from "axios"
import { useEffect, useState } from "react"
import '../styles/components/Success.css';


const useMapAddress = (address) => {

  const { city, state} = address;
  const [map, setMap] = useState({})
  const API = `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITION_STACK_API_KEY}&query=${city}+${state}`;

  useEffect( async () => {
    const response = await axios(API)
    const {data} = await response.data;
    setMap(data[0])
  },[])

  return map;
}

export default useMapAddress
