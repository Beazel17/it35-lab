import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
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
            backgroundImage: 'url("https://snworksceo.imgix.net/jst/3c144098-e32a-4f2b-97e7-87bd99e5c042.sized-1000x1000.jpg?w=1750")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '16px'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
              <IonAvatar className="login-avatar">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAII6i_PqKUZDojWMePdbfRW3lipjQY-2Hw&s"
                  alt="User Avatar"
                />
              </IonAvatar>
            </div>

            <h2
              style={{
                marginBottom: '20px',
                color: '#00ff00', // neon green
                fontFamily: '"Creepster", cursive', // horror font
                fontSize: '40px',
                textShadow: '2px 2px 5px #000'
              }}
            >
              Welcome Back JOKER!
            </h2>

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
