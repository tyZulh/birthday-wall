import { useEffect, useState } from "react"
import axios from "axios"

import BirthdayCard from "../components/BirthdayCard"

const BASE_PATH = process.env.REACT_APP_API_URL

const BirthdayWalls = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${BASE_PATH}/all`)
      setStudents(result.data)
    }
    fetchData()
  }, [])

  const addBirthday = (newStudent) => {
    setStudents([...students, newStudent])
  }

  return (
    <div className='birthdayList'>z 
      {students.map((student)=>{
        console.log(student);
        return (
          <div key={student.id}>
            <BirthdayCard student={student} />
          </div>
        )
      })}

      <AddBirthday addBirthday={addBirthday}/>
    </div>
  )
}

export default BirthdayWalls