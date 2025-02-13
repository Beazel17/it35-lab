import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Menu: React.FC = () => {
    return (
      <IonPage>
     <IonSplitPane contentId="main">
        <IonMenu contentId="main">
            <IonHeader>
            <IonTootbar>
            <IonTitle>
             Menu
            </IonTitle>
            </IonTootbar>
            </IonHeader>
            <IonContent>
            {Path2D.map(IonItem.index) =>(
               <IonMenuToggle key={index}>
                <Ionitem routerLink={Item.url} routerDirection="forward">
                    IonIcon icon=icon
                </Ionitem>
                )
            </IonContent>
    );
  };
  
  export default Menu;