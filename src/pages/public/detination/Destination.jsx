import React from 'react'
import PublicHeader from '../../../components/layout/PublicHeader'
import DetailDestinationHero from './DetailDestinationHero'
import DetailDestinationTop_Available from './DetailDestinationTop_Available'
import TheLensAndExplore from './DestinationDetailTheLensAndExplore'
import PublicFooter from '../../../components/layout/PublicFooter'

const Destination = () => {
  return (
    <>
        <PublicHeader />
        <DetailDestinationHero />
        <DetailDestinationTop_Available />
        <TheLensAndExplore />
        <PublicFooter />
    </>
  )
}

export default Destination