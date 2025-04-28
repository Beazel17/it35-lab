import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({
  message,
  isOpen,
  onClose
}) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        style={{
          '--ion-background-color': 'transparent',
          padding: '0',
          margin: '0'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(to bottom right, #5f72be, #9921e8)',
            padding: '16px'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '400px',
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              textAlign: 'center'
            }}
          >
            <IonAvatar style={{ margin: '0 auto 20px', width: '100px', height: '100px' }}>
              <IonIcon icon={logoIonic} style={{ fontSize: '100px', color: '#5f72be' }} />
            </IonAvatar>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Welcome Back!</h2>

            <IonInput
              label="Email"
              labelPlacement="floating"
              fill="outline"
              type="email"
              placeholder="Enter your email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
            <IonInput
              style={{ marginTop: '15px' }}
              fill="outline"
              type="password"
              placeholder="Enter your password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            <IonButton
              expand="block"
              shape="round"
              style={{ marginTop: '25px' }}
              onClick={doLogin}
            >
              Login
            </IonButton>

            <IonButton
              routerLink="/it35-lab/register"
              expand="block"
              fill="clear"
              shape="round"
              style={{ marginTop: '10px', color: '#5f72be' }}
            >
              Don't have an account? Register here
            </IonButton>
          </div>
        </div>

        {/* Alert Box */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        {/* Success Toast */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
