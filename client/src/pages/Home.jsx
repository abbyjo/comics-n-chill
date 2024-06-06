import { useState } from 'react';

function Home() {
    const [formData, setFormData] = useState({drink: '', genre: ''});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
      
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (formData.drink === '' || formData.genre === '') {
            alert("Please choose a drink & genre!")
        } else {
            console.log("I've been clicked...!");
            console.log(formData)  
        }
    }
    return (
<main>
    <h1>This is the Home page.</h1>
    <form onSubmit={handleFormSubmit}>
        <fieldset>
            <legend>Drink?</legend>
            <p>
                <input type="radio" name="drink" id="alcoholic" value="true" onChange={handleInputChange}/>
                <label>Alcoholic</label>
            </p>
            <p>
                <input type="radio" name="drink" id="non-alcoholic" value="false" onChange={handleInputChange}/>
                <label>Non-Alcoholic</label>
            </p>
        </fieldset>

        <fieldset>
            <legend>Genre?</legend>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="romance" value="Romance" />
                <label >Romance</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="sci-fi" value="Sci-fi" />
                <label >Sci-Fi</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="horror" value="Horror" />
                <label >Horror</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="comedy" value="Comedy" />
                <label >Comedy</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="fantasy" value="Fantasy" />
                <label >Fantasy</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="mystery" value="Mystery" />
                <label >Mystery</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="historical" value="Historical" />
                <label >Historical</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="action" value="Action-Adventure" />
                <label >Action-Adventure</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="drama" value="Drama" />
                <label >Drama</label>
            </p>
        </fieldset>
        <input type="submit" value="Get Results"></input>
    </form>
</main>
    );
}

export default Home;