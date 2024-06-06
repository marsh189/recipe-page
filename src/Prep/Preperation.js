import './preperation.css'

const Preperation = (props) => {
  return (
    <section className="preperation-section">
      <h3>Preperation time</h3>
      <ul>
        {props.prep.map((item) => (
          <li key={item.id}>
            <p>
              <b>{item.title}: </b>
              {item.time}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Preperation
