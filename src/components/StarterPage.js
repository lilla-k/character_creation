import './StarterPage.css';

const StarterPage = (props) => {

    return (
        <div id="starterPage-container">
            <div id="header">
                <div>Character creation</div>
            </div>
            <section>
                <div>Choose your character's name:</div>
                <input onKeyUp={props.onChange}
                />
                <button id="starter-button" onClick={props.onClick}>Get started</button>
            </section>
        </div>
    )
}

export default StarterPage;
