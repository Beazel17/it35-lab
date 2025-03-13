import { IonButton, IonContent, IonInput, IonPage, IonToast, IonAlert } from '@ionic/react';
import { useState } from 'react';
import { useIonRouter } from '@ionic/react';

const Register: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const doRegister = async () => {
    // Basic validation for empty fields
    if (!email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      setShowAlert(true);
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      setShowAlert(true);
      return;
    }

    // Simulate registration success
    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab', 'back', 'replace'); // Redirect to login page after successful registration
    }, 1500);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
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
            REGISTER HERE
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
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            style={{ width: '100%', marginBottom: '15px' }}
          />

          <IonInput
            fill="outline"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onIonChange={(e) => setConfirmPassword(e.detail.value!)}
            style={{ width: '100%', marginBottom: '25px' }}
          />

          <IonButton
            style={{
              marginBottom: '15px',
            }}
            onClick={doRegister}
            expand="full"
            shape="round"
            color="primary"
          >
            Register
          </IonButton>
          <>
          <IonButton
            routerLink="/it35-lab"
            expand="full"
            fill="clear"
            shape="round"
            style={{
              color: '#007bff',
            }}
          >
            Go back to "Login"
          </IonButton>
    </>
          {/* IonToast for registration success */}
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Registration successful! Redirecting to login..."
            duration={1500}
            position="top"
            color="primary"
          />

          {/* IonAlert for displaying error messages */}
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Registration Error"
            message={errorMessage}
            buttons={['OK']}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
