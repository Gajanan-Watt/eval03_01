import { useEffect, useRef, useState } from "react";
import "./recipe.css";

export default function Recipe() {
  const [recipeData, setrecipeData] = useState({
    title: "",
    ingredients: "",
    timetocook: "",
    image: "",
    instructions: ""
  });

  // const [page, setPage] = useState(0);
  const [getrecipe, getrecipedata] = useState([]);
  const [img, setImgUrl] = useState();
  const fileRef = useRef();

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "image") {
      value = URL.createObjectURL(fileRef.current.files[0]);
    }
    setrecipeData({
      ...recipeData,
      [name]: value
    });
    // console.log(recipeData);
  };

  // useEffect(() => {
  //   // console.log("used");
  //   getRecipe();
  // }, [page]);

  // const getRecipe = () => {
  //   fetch(`http://localhost:8000/recipe`)
  //     .then((d) => d.json())
  //     .then((res) => {
  //       // console.log(res)
  //       getrecipedata(res);

  //       getrecipe.map((e) => setImgUrl(e.image));
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipeData);
    // console.log()
    fetch("http://localhost:8000/recipe", {
      method: "POST",
      body: JSON.stringify(recipeData),
      headers: {
        "content-type": "application/json"
      }
    }).then(() => {});
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch("http://localhost:8000/recipe", {
  //     method: "POST",
  //     body: JSON.stringify(recipeData),
  //     headers: {
  //       "content-type": "application/json"
  //     }
  //   }).then(() => {
  //     // getForm();
  //   });
  // };

  return (
    <div>
      <div className="layout">
        <div className="left">
          <form action="" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="Title"
            />
            <br />
            <br />
            <input
              onChange={handleChange}
              name="ingredients"
              type="text"
              placeholder="Ingredients"
            />
            <br />
            <br />
            <input
              onChange={handleChange}
              name="timetocook"
              type="text"
              placeholder="Time to cook"
            />
            <br />
            <br />
            <input
              type="file"
              onChange={handleChange}
              name="image"
              ref={fileRef}
            />
            <br />
            <br />
            <input
              onChange={handleChange}
              name="instructions"
              type="text"
              placeholder="Instructions"
            />
            <br />
            <br />
            <input type="submit" value="submit" />
          </form>
        </div>
        <div className="right"></div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
