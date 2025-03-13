import { 
  IonAlert,
  IonButton,
  IonContent, 
  IonInput, 
  IonInputPasswordToggle,  
  IonPage,  
  IonToast,  
  useIonRouter
} from '@ionic/react';

import { useState } from 'react';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        setErrorMessage('Please enter a valid email address.');
        setShowAlert(true);
        return; 
    }

    if (!password) {
        setErrorMessage('Password cannot be empty.');
        setShowAlert(true);
        return;
    }

    setShowAlert(false);
    setShowToast(true);
    setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 1500);
  };


  return (
    <IonPage>
      <IonContent className='ion-padding'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20%',
          }}
        >
          <h1
            style={{
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            LOGIN HERE
          </h1>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter Email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            style={{ width: '100%', marginBottom: '15px' }}
          />
          <IonInput
            style={{
              width: '100%',
              marginBottom: '25px',
            }}
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton
            style={{
              marginBottom: '15px',
            }}
            onClick={doLogin}
            expand="full"
            shape="round"
            color="primary"
          >
            Login
          </IonButton>

          {/* Register Button */}
          <IonButton
            routerLink="/it35-lab/register"
            expand="full"
            fill="clear"
            shape="round"
            style={{
              color: '#007bff',
            }}
          >
            Don't have an account? Register here
          </IonButton>

          {/* IonAlert for displaying login errors */}
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Login Failed"
            message={errorMessage}
            buttons={['OK']}
          />
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Login successful! Redirecting..."
            duration={1500}
            position="top"
            color="primary"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
