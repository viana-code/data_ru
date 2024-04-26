import { Inicio } from "../Inicio/Inicio"
import  StarRating  from '../StarRating/StarRating'

export const Main = () => {
  return (
    <main className="d-flex justify-content-center" style={{width: '100%', marginTop: '50px'}}>
        <Inicio/>
        <StarRating/>
    </main>
  )
}
