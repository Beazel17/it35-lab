import { 
  IonAvatar,
  IonButton,
  IonContent, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonPage, 
  useIonRouter
} from '@ionic/react';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    if (!email || !password) {
      alert('Please enter your email and password.');
      return;
    }
    navigation.push('/it35-lab/app', 'forward', 'replace'); 
  };

  const doSignup = () => {
    navigation.push('/Register', 'forward', 'replace'); 
  };

  return (
    <IonPage>
      <IonContent fullscreen className="login-content">
        <style>
          {
            `@keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            .login-content {
              background: linear-gradient(-45deg, #ff758c, #ff7eb3, #57c1eb, #7a77ff);
              background-size: 400% 400%;
              animation: gradientMove 8s ease infinite;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              text-align: center;
            }

            .login-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 90%;
              max-width: 400px;
              background: rgba(255, 255, 255, 0.2);
              padding: 40px;
              border-radius: 15px;
              backdrop-filter: blur(10px);
              box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
              text-align: center;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation: fadeIn 1s ease-in-out;
            }

            @keyframes fadeIn {
              0% { opacity: 0; transform: translate(-50%, -60%); }
              100% { opacity: 1; transform: translate(-50%, -50%); }
            }

            .avatar {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
              animation: bounce 2s infinite;
            }

            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }`
          }
        </style>

        <div className="login-box">
          <IonAvatar className="avatar">
            <img 
              alt="User Avatar" 
              src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/487136731_2104161360083958_3356733532338079109_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGK9_DJsifaECqhs6PCSHZQqQpNKAEuAt6pCk0oAS4C3mi17W3akL006Mj3JT7K0NOFEdXyet1xUyZAfK8RsCec&_nc_ohc=lagx3kIOr5cQ7kNvwHb_ze5&_nc_oc=AdlZL4nwMQg0EjlHOEHnZwUpJF5EHtq3FHvCc0gdQLeGjEgGPepm70swtrp_ewWKBteTLXy601SQE3op6C_0TiqU&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=TUJ6yd0nDEDS6w7eqbKD-A&oh=00_AYEzeGUHXuDgaPVGGZM2BJxvkWpvA4RbQVd6CDofHb_uAg&oe=67F511E0"
              style={{ width: '100%', height: '100%' }}
            />
          </IonAvatar>

          <h1 style={{ color: 'white', fontWeight: 'bold', marginBottom: '20px' }}>USER LOGIN</h1>

          <IonItem style={{ width: '100%', marginBottom: '10px', borderRadius: '10px', overflow: 'hidden' }}>
            <IonInput 
              label="Email" 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
          </IonItem>

          <IonItem style={{ width: '100%', marginBottom: '20px', borderRadius: '10px', overflow: 'hidden' }}>
            <IonInput 
              type="password" 
              label="Password"
              value={password} 
              onIonChange={(e) => setPassword(e.detail.value!)}
            >
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
          </IonItem>
          
          <IonButton onClick={doLogin} expand="full" style={{ width: '100%', marginBottom: '10px' }}>
            LOGIN
          </IonButton>
          <IonButton onClick={doSignup} expand="full" color="secondary" style={{ width: '100%' }}>
            DONT HAVE AN ACCOUNT? REGISTER HERE
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;