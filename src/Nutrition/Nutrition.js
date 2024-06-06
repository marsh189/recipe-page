import './nutrition.css'

const Nutrition = (props) => {
  return (
    <section className="nutrition-section">
      <h2>Nutrition</h2>
      <p className="desc">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="nutrition-table">
        {props.stats.map((stat, index) => (
          <div>
            <div className="stat" key={stat.id}>
              <p className="name">{stat.name}</p>
              <p className="amount">{stat.amount}</p>
            </div>
            {index !== props.stats.length - 1 ? <hr /> : <></>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Nutrition
