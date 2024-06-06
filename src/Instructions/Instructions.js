import './instructions.css'

const Instructions = (props) => {
  return (
    <section className="instructions-section">
      <h2>Instructions</h2>
      <ol>
        {props.steps.map((step) => (
          <li key={step.id}>
            <p>
              <b>{step.title}: </b>
              {step.desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
export default Instructions
