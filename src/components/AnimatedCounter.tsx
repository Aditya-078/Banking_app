'use client';

import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>
        <CountUp end={amount} decimal='.' prefix='Rs. ' duration={1.5}
         decimals={2}
        />
    </div>
  )
}

export default AnimatedCounter