import './App.css'
import Heading from './Heading/Heading'
import Ingredients from './Ingredients/Ingredients'
import Instructions from './Instructions/Instructions'
import Nutrition from './Nutrition/Nutrition'
import Preperation from './Prep/Preperation'
import { recipe } from './data'

function App() {
  return (
    <div className="App">
      <Heading
        title={recipe.title}
        img={recipe.img}
        desc={recipe.description}
      />
      <Preperation prep={recipe.prep} />
      <Ingredients ingredients={recipe.ingredients} />
      <hr />
      <Instructions steps={recipe.instructions} />
      <hr />
      <Nutrition stats={recipe.nutrition} />
    </div>
  )
}

export default App
