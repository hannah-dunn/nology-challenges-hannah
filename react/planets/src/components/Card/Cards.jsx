import data from "../../data/data.json"

// const Cards = () => {
//     return {
        
        
//     }
// };



function Cards() {
  return (
    <div>
        {data.map((element, index) => (
       key = {index}
       name = {element.planetName} 
     picture = {element.image} 
      distanceFromSun: 
      diameterInKm: 
     numberOfMoons: 
     lengthOfYear: 
        ))}
        
    </div>
  )
}

export default Cards
