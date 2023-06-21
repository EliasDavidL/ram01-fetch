import { useEffect, useState } from "react"
import { getAll } from "../../ServiceRyM/servicesRyM"


export const CharactersListComponent = () => {
  const [character, setCharacter] = useState([])
  const [carga, setCarga] = useState(true)
  
    useEffect(() => {
      const request = async () =>{
        try {
          const dato = await getAll()
          setCharacter(dato)
          setCarga(false)
        } catch(error){
          console.log("Error", error)
        }
      }
      request()
    }, [])
    if(carga){
      return <div>Cargando...</div>

    }else{
      return(
      <ul>
      {
        character.results.map((character) => (
          <li>
            <img src={ character.image } alt="" />
            { character.name }
            
          </li>
        ))
      }
    </ul>
      )
    }
  
      
    }
    
