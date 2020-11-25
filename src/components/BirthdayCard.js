import './BirthdayCard.css'

const BirthdayCard = ({ student }) => {
  
  const formateDate = (date) => {
    const dateArray = date.split('-')
    const newDateArray = dateArray.reverse()
    return newDateArray.join('/')
  }

  return (
    <div className='birthdayCard'>
      <p className='name'>
        {student.name}
      </p>

      <p>
        {formateDate(student.birthday)}
      </p>
    </div>
  )
}

export default BirthdayCard