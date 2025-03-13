import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import './css/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useIonRouter();

  const doLogin = () => {
    if (email && password) {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    } else {
      alert("Please fill in both email and password.");
    }
  };

  const goToRegister = () => {
    navigation.push('/register', 'forward', 'replace');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding login-content'>
        <div className="login-form">
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              type="email"
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              type="password"
              required
            />
          </IonItem>

          <IonButton onClick={doLogin} expand="full" className="login-button">
            Login
          </IonButton>
          <IonButton onClick={goToRegister} expand="full" color="light" className="register-button">
            Register
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
