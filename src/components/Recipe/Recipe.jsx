import "./Recipe.css";

function Recipe({recipeData}) {
    const {id, recipeName, ingredients, preparation, oven} = recipeData;
    const difficultyArray = new Array(5).fill(undefined);

    return (
        <section id={id}>
            <div className="wrapper">
                <h1>{recipeName}</h1>

                <div className="recipe-grid">
                    <aside>
                        <h2>INGREDIENTS</h2>
                        {
                            ingredients.map((ingredient) => {
                                return <p key={ingredient}>{ingredient}</p>;
                            })
                        }
                    </aside>
                    <aside>
                        <h2>PREPARACIÓ</h2>
                        {
                            preparation.map((instruction) => {
                                return <p key={instruction}>{instruction}</p>;
                            })
                        }
                    </aside>
                    <aside>
                        <img src={`img/${id}-header.jpg`} alt={`${id}-header`} />
                    </aside>
                    <aside className="secondary-box">
                        <div>
                            <i className="fa-solid fa-clock"></i>
                            <br />
                            <strong>{oven.time}&nbsp;min</strong>
                        </div>
                    </aside>
                    <aside className="secondary-box">
                        <div>
                            <i className="fa-solid fa-fire-burner"></i>
                            <br />
                            <strong>{oven.temperature}&nbsp;°C</strong>
                        </div>
                    </aside>
                </div>

                <div className="img-container">
                    <img src={`img/${id}1.jpg`} alt={id} className="food-img" />
                    <img src={`img/${id}2.jpg`} alt={id} className="food-img" />
                    <img src={`img/${id}3.jpg`} alt={id} className="food-img" />
                </div>
            </div>
        </section>
    )
}

export default Recipe;