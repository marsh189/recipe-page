import './ingredients.css'

const Ingredients = (props) => {
  return (
    <section className="ingredients-section">
      <h2>Ingredients</h2>
      <ul>
        {props.ingredients.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Ingredients
