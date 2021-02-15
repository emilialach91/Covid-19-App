import styles from './LearnMore.module.css';
import symptomsImage from '../../images/symptoms.png'
import airTransmission from '../../images/airTransmission.png'
import humanContacts from '../../images/humanContacts.png'
import containtedObjects from '../../images/containtedObjects.png'


const LearnMore = () => {
  return (
    <div className={styles.container}>
      <div classNAme={styles.learnMore}>
        <h4 className={styles.title}>Covid-19</h4>
        <h5 className={styles.subtitle}>Symptomps</h5>
        <p className={styles.description}>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory </p>
        <img src={symptomsImage} className={styles.symptomsImage}/>
      </div>
      <div classNAme={styles.container}>
      <h4 className={styles.title}>Covid-19</h4>
        <h5 className={styles.subtitle}>Contagions</h5>
        <p className={styles.description}>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type </p>
        <div className={styles.tiles}>
          <div className={styles.block}>
            <img src={airTransmission} className={styles.contagionImage}/>
            <h6 className={styles.name}>Air Transmission</h6>
            <p className={styles.description}>Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify</p>
          </div>
          <div className={styles.block}>
            <img src={humanContacts} className={styles.contagionImage}/>
            <h6 className={styles.name}>Human Contacts</h6>
            <p className={styles.description}>Washing your hands is one of thesimplest ways you can protect</p>
          </div>
          <div className={styles.block}>
            <img src={containtedObjects} className={styles.contagionImage}/>
            <h6 className={styles.name}>Containted Objects</h6>
            <p className={styles.description}>Use the tissue while sneezing,In this way, you can protect your droplets.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
