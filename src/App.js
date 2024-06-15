import { useState } from 'react';
import './App.css';
//import Colors from './Sidebar/Colors/Colors';
import Navigate from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data'
import Card from './components/Card'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filterItems = products.filter(product =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1)
    console.log(filterItems)

  //Radio filter
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //Button filter

  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products


    //filter Input Items
    if (query) {
      filteredProducts = filterItems
    }

    //selected items

    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title })=> 
        category === selected ||
       color === selected || 
       company === selected ||
       newPrice===selected ||
       title===selected
  );
    }
      return filteredProducts.map(({img,title,star,reviews,newPrice})=>(
       <Card key={Math.random()} 
       img={img}
       title={title}
       star={star}
       reviews={reviews}
       newPrice={newPrice}
       />
      ));
  }
const result = filteredData(products,selectedCategory,query)
console.log(result);
  return (
    
    <div className='main'>
      <Sidebar handleChange={handleChange}/>
      <Navigate query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result}/>
    </div>

  );
}

export default App;
