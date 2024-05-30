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
                <input onChange={handleInputChange} type="radio" name="genre" id="romance" value="romance" />
                <label >Romance</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="sci-fi" value="sci-fi" />
                <label >Sci-Fi</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="horror" value="horror" />
                <label >Horror</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="comedy" value="comedy" />
                <label >Comedy</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="fantasy" value="fantasy" />
                <label >Fantasy</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="mystery" value="mystery" />
                <label >Mystery</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="historical" value="historical" />
                <label >Historical</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="action" value="action" />
                <label >Action-Adventure</label>
            </p>
            <p>
                <input onChange={handleInputChange} type="radio" name="genre" id="slice-of-life" value="slice-of-life" />
                <label >Slice of Life</label>
            </p>
        </fieldset>
        <input type="submit" value="Get Results"></input>
    </form>
</main>
    );
}

export default Home;