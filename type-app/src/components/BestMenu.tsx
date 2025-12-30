import type {Menu} from "../model/Restaurant"

interface Props extends Menu{
  showBestMenuName(name:string): string
}

const BestMenu = ({name, price, category, showBestMenuName}: Props) => {
  return(
    <div>
      <h2>{name}-{price}원</h2>
    </div>
  )
}  

export default BestMenu