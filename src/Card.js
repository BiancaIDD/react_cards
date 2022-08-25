import { useEffect, useState } from "react";
import "./Card.css";

async function fetchCategories() {
  let response = await fetch(
    "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories?format=json"
  );
  let categories = await response.json();
  return categories;
}

export default function CreateCards() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories.communityCategories);
    });
  }, []);
  return (
    <div>
        {categories.map((category) => (
          <div className="card">
            <div
              className="style_background"
              style={{backgroundImage: `url('${category.background}')`}}
            >
              <img src={category.icon} />
            </div>
            <div>
              <h3>{category.name}</h3>
              <p>Total Quizes: {category.quizzesDone}</p>
              <p>Users: {category.users}</p>
              <a href="https://www.larnu.com">Go to LarnU</a>
            </div>
          </div>
        ))}
    </div>
  );
}
