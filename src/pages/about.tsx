import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonText
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonText>
          <h2>About Me</h2>
          <p>
            Hi, my name is <strong>Beazel Rey Ayuno</strong>. I’m 22 years old and I’m passionate about many things in life.
          </p>
          <p>
            I love playing basketball, riding motorcycles, and enjoying online games. These are just a few of the things that bring me joy and help me unwind.
          </p>
          <p>
            I'm also a hardworking individual who believes in perseverance and growth. I always strive to improve myself and never back down from a challenge.
          </p>
          <p>
            Thank you for taking the time to get to know me!
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default About;
