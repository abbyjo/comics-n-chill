
function Home() {
    return (
<main>
    <h1>This is the Home page.</h1>
    <form>
        <fieldset>
            <legend>Drink?</legend>
            <p>
                <input type="radio" name="drinks" id="alcoholic" value="true"/>
                <label for="alcoholic">Alcoholic</label>
            </p>
            <p>
                <input type="radio" name="drinks" id="non-alcoholic" value="false"/>
                <label for="non-alcoholic">Non-Alcoholic</label>
            </p>
        </fieldset>

        <fieldset>
            <legend>Genre?</legend>
            <p>
                <input type="checkbox" name="romance" id="romance" value="romance" />
                <label for="romance">Romance</label>
            </p>
            <p>
                <input type="checkbox" name="sci-fi" id="sci-fi" value="sci-fi" />
                <label for="sci-fi">Sci-Fi</label>
            </p>
            <p>
                <input type="checkbox" name="horror" id="horror" value="horror" />
                <label for="horror">Horror</label>
            </p>
            <p>
                <input type="checkbox" name="comedy" id="comedy" value="comedy" />
                <label for="sci-fi">Comedy</label>
            </p>
            <p>
                <input type="checkbox" name="fantasy" id="fantasy" value="fantasy" />
                <label for="fantasy">Fantasy</label>
            </p>
            <p>
                <input type="checkbox" name="mystery" id="mystery" value="mystery" />
                <label for="fantasy">Mystery</label>
            </p>
            <p>
                <input type="checkbox" name="historical" id="historical" value="historical" />
                <label for="fantasy">Historical</label>
            </p>
            <p>
                <input type="checkbox" name="action" id="action" value="action" />
                <label for="fantasy">Action-Adventure</label>
            </p>
            <p>
                <input type="checkbox" name="slice-of-life" id="slice-of-life" value="slice-of-life" />
                <label for="slice-of-life">Slice of Life</label>
            </p>
        </fieldset>
        <input type="submit" value="Get Results"></input>
    </form>
</main>
    );
}

export default Home;