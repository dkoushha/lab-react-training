import React, { Component } from 'react';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating ';
import DriverCard from './Components/DriverCard';
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture';



export class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>IdCard</h2><br />
        <IdCard lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h2>Greetings</h2><br />
        <Greetings >Ludwig</Greetings>
        <Greetings lang='ar'>François</Greetings>
        <h2>Random</h2><br />
        <Random min={-1} max={-6} />
        <Random min={2.8} max={100} />
        <h2>BoxColor</h2><br />
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={0} g={0} b={0} />
        <h2>Credit Card</h2><br />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <CreditCard type='visa' number="0123456789018845" expirationMonth={3} expirationYear={2021} bank="BNP"
            owner="Maxence Bouret" bgColor="#11aa99" color="white" />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" /></div>
        <h2>Rating</h2><br />
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>2.3</Rating>
        <Rating>3.2</Rating>
        <Rating>4.3</Rating>
        <Rating>5.2</Rating>
        <h2>Driver Card</h2><br />
        <DriverCard name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }} ></DriverCard>
        <br />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />
        <h2>Like Button</h2><br />
        <LikeButton />
        <h2>Clickable Picture</h2><br />
        <ClickablePicture
          img='/img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />
      </div>
    )
  }
}

export default App;



