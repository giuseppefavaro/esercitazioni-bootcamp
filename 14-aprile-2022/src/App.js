import './App.css';

import {data} from "./data";

import {BookCard} from "./components/BookCard";




function App() {

  return (
    <div className="ProductList__container">

      { data.products.map( (item) =>

          <BookCard 
            key={item.id}
            title={item.name}
            description={item.description}
            img={item.img}>
          </BookCard>

          ) }
      
    </div>
  );
}

export default App;

