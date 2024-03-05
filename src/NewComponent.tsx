
type NewComponentType = {
  students: Array<StudentsType>
}

type StudentsType = {
  id: number
  name: string
  age: number
}

export const NewComponent = (props: NewComponentType) => {

  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
  ]



  return (
    <>
      {topCars.map((car, index) => {
        return (
          <table>
            <tr>
              <th>manufacturer</th>
              <th>model</th>
            </tr>
            <tr>
              <td>{car.manufacturer}</td>
              <td>{car.model}</td>
            </tr>
          </table>
        )
      })}


      <ul>
        {props.students.map((student, index) => {
          return (
            <li>
              <span>{student.name},</span>
              <span> age:{student.age}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}