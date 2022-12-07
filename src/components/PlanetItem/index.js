// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  return (
    <div>
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
