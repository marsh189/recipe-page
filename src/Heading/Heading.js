import './heading.css'
const Heading = (props) => {
  return (
    <section className="heading-section">
      <img src={props?.img} alt={props?.img} />
      <h1>{props?.title}</h1>
      <p>{props?.desc}</p>
    </section>
  )
}
export default Heading
