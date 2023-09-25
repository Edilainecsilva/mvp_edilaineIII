
import Styles from '../components/Circle.module.css'

export default function Circle() {
    return (
        <>
        <h1><strong>Categorias</strong></h1><br></br>
        <div className={Styles.grid}>
            <div className={Styles.circle}>
                <div></div>
                <h2><strong>Feminino</strong></h2>
            </div>
        
            <div className={Styles.circle2}>
                <div></div>
                <h2><strong>Infantil</strong></h2>
            </div>

            <div className={Styles.circle3}>
                <div></div>
                <h2><strong>Masculino</strong></h2>
            </div>

            <div className={Styles.circle4}>
                <div></div>
                <h2><strong>Teens</strong></h2>
            </div>
        </div>
        </>
    )
}