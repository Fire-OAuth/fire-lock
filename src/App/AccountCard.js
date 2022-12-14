import right from "./right.svg"
import styles from "./AccountCard.module.css"
import { useNavigate } from "react-router-dom"
import { returnIssuerImage } from "../components/AddAccount"

function AccountCard(props) {
    
    let navigate = useNavigate()

    let imageSrc = returnIssuerImage(props.issuer)

    let handleClick = () => {
        let {id} = props
        setTimeout(() => {
            navigate(`/account/${id}`)
        }, 100)
    }

	return (
		<>
            <div className={styles.cardHolder} onClick={handleClick}>
                <div className={styles.logoHolder}>
                    <img src={imageSrc} alt={props.issuer} />
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <span className={styles.contentLabel}>{props.issuer}</span>
                        <span className={styles.contentEmail}>{props.account}</span>
                    </div>
                    <div className={styles.navigatorHolder} onClick={handleClick}>
                        <img src={right} alt="View" />
                    </div>
                </div>
            </div>
		</>
	)
}

export default AccountCard
