import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [data, setData] = useState(items);

  const filterItems = (category) => {
    if (category === "") {
      setData(items);
    } else {
      let newItem = items.filter((x) => x.category === category);
      setData(newItem);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu data={data} />
      </section>
    </main>
  );
}

export default App;
