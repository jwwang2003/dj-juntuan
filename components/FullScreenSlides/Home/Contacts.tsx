import CardTemplate from '../Template'
import styles from '@/styles/Contact.module.css'

interface ContactCard {
  
}

const testData: ContactCard = {

}

export default function Contacts(): JSX.Element {
  return (
    <CardTemplate>
      <div>
        <h1 className="text-5xl mb-4">联系人</h1>
        <div className={styles.contactGrid}>

        </div>
      </div>
    </CardTemplate>
  )
}