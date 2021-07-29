import './App.css';
import { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { isOpenChange } from './redux/reducer/ChecksReducer';
import Navigation from './components/navigation/navigation/navigation';
import ShowDate from './components/showDate/show';
import Title from './components/navigation/title/Title';

function App(props) {
    window.moment = moment();
    

    const [day, setDay] = useState(moment());

    let startDayOfWeek = day.clone().startOf('month').startOf('week');

    const onNext = () => {
      setDay( day => day.clone().add(1, 'month') );
    }
    const onBack = () => {
      setDay( day => day.clone().subtract(1, 'month') );
    }
    const onToday = () => {
      setDay( moment() );  
    }

    const onClickEvent = () => {
      props.isOpenChange(true);
      console.log(day.format('DDMMYYYY'));
    }

    return (
      <div className="App">
        <Title />
        <Navigation 
          onNext = { onNext } onBack = { onBack } 
          onToday = { onToday } day = { day } />
        <ShowDate 
          startDayOfWeek = { startDayOfWeek } day = { day } 
          onClickEvent = { onClickEvent } isOpen = { props.isOpen } 
          isOpenChange = { props.isOpenChange } />
      </div>
    );
}

const mapStateToProps = (state) => ({
  isOpen: state.check.isOpen 
});

export default connect(mapStateToProps, { isOpenChange })(App);


