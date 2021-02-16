import styles from './LearnMore.module.css';
import mark1 from '../../images/mark1.png';
import mark2 from '../../images/mark2.png';
import mark3 from '../../images/mark3.png';
import mark4 from '../../images/mark4.png';


const LearnMore = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Covid-19</h4>
      <h5 className={styles.subtitle}>Symptomps</h5>
      <p className={styles.description}>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory </p>
      <div className={styles.symptomsImage}></div>
      <h4 className={styles.title}>Covid-19</h4>
      <h5 className={styles.subtitle}>Contagions</h5>
      <p className={styles.description}>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type </p>
      <div className={styles.tiles}>
        <div className={styles.block}>
          <div className={styles.contagionImage, styles.air}></div>
          <h6 className={styles.name}>Air Transmission</h6>
          <p className={styles.description}>Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify</p>
        </div>
        <div className={styles.block}>
          <div className={styles.contagionImage, styles.contact}></div>
          <h6 className={styles.name}>Human Contacts</h6>
          <p className={styles.description}>Washing your hands is one of thesimplest ways you can protect</p>
        </div>
        <div className={styles.block}>
          <div className={styles.contagionImage, styles.objects}></div>
          <h6 className={styles.name}>Containted Objects</h6>
          <p className={styles.description}>Use the tissue while sneezing,In this way, you can protect your droplets.</p>
        </div>
      </div>
      <h4 className={styles.title}>Covid-19</h4>
      <h5 className={styles.subtitle}>What Should we do</h5>
      <p className={styles.description}>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused</p>
      <div className={styles.row}>
        <div className={styles.line} >
            <div className={styles.text}>
            <div className={styles.number}>
                <img src={mark1} className={styles.mark}/>  
                <h6 className={styles.name}>Wear Masks</h6>
              </div>
              <p className={styles.advice}>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
            </div>
            <div className={styles.mask}></div>
        </div>
        <div className={styles.line}>
            <div className={styles.hands}></div>
            <div className={styles.text}>
              <div className={styles.number}>
                <img src={mark2} className={styles.mark}/>  
                <h6 className={styles.name}>Wash Your Hands</h6>
              </div>
              <p className={styles.advice}>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals </p>
            </div>
            <div className={styles.mobileHands}></div>
        </div>
        <div className={styles.line} >
            <div className={styles.text}>
              <div className={styles.number}>
                <img src={mark3} className={styles.mark}/>  
                <h6 className={styles.name}>Use Nose - Rag</h6>
              </div>
              <p className={styles.advice}>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
            </div>
            <div className={styles.nose}></div>
        </div>
        <div className={styles.line} >
            <div className={styles.contacts}></div>
            <div className={styles.text}>
            <div className={styles.number}>
                <img src={mark4} className={styles.mark}/>  
                <h6 className={styles.name}>Avoid Contacts</h6>
              </div>
              <p className={styles.advice}>Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic</p>
            </div>
            <div className={styles.mobileContacts}></div>
        </div>
      </div>
    </div>
    
  );
};

export default LearnMore;
