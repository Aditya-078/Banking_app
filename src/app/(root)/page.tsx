import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName:"Aditya", lastName:"Pawar", email:'aditya@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title = "Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transaction easily"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />


        </header>

        RECENT TRANSCATION
      </div>
      <RightSidebar 
        user= {loggedIn}
        transactions={[]}
        banks = {[{ currentBalance: 1250.20 }, { currentBalance:5000 }]}
      />
    </section>
  )
}

export default Home