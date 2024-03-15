export default Loader


function Loader({feedback}) {
    return (
            <div className="loader">
                <h3>{feedback}</h3>
            </div>
    );
}