import React, { useState } from 'react';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import TabOptions from '../../components/common/tabOptions/TabOptions';
import Delivery from '../../components/delivery/Delivery';
import DiningOut from '../../components/diningOut/DiningOut';
import NightLife from '../../components/nightLife/NightLife';
const HomePage = () => {
  const [activetab, setActiveTab] = useState('Dining Out');
  return (
    <div>
      <Header />
      <TabOptions activetab={activetab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activetab)}
      {/* Different Screen based on selection */}
      <Footer />
    </div>
  );
};
const getCorrectScreen = (tab) => {
  switch (tab) {
    case 'Delivery':
      return <Delivery />;
    case 'Dining Out':
      return <DiningOut />;
    case 'Night Life':
      return <NightLife />;
    default:
      return <Delivery />;
  }
};
export default HomePage;
