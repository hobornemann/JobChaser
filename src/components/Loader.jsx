import styles from './Loader.module.css'
export default Loader


function Loader({feedback}) {
    return (
            <div className={styles.loader}>
                <h3>{feedback}</h3>
            </div>
    );
}