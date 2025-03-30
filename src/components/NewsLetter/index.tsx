import Button from '../Button'
import FieldSet from '../FieldSet'
import InputText from '../InputText'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <section className={styles.newsletter}>
        <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
        <form className={styles.form}>
            <FieldSet>
                <InputText placeholder='Digite seu melhor email'/>
            </FieldSet>
            <Button type='submit' variant='default'>Inscreva-se</Button>
        </form>
    </section>
  )
}

export default NewsLetter
