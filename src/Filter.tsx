import { FilterType } from "./App"


type FilterPropsType = {
  onClickFilter: (btnName: FilterType) => void
  currentMoney: Array<ArrayMoneyType>
}

type ArrayMoneyType = {
  banknots: string
  value: number
  number: string
}


export const Filter = (props: FilterPropsType) => {
  return  <>
    <ul>
      {props.currentMoney.map((el, index) => {
        return (
          <li key={el.number} >
            <span>{el.banknots}</span>
            <span>{el.value}</span>
            <span>{el.number}</span>
          </li>
        )
      })}
    </ul>
    <button onClick={() => props.onClickFilter('all')} >all</button>
    <button onClick={() => props.onClickFilter('RUBLS')} >RUBLS</button>
    <button onClick={() => props.onClickFilter('Dollars')} >Dollars</button>
  </>
}