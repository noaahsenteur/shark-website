import Header from '@app/components/header';
import MintBlock from '@app/components/mint-block'
import GoalsBlock from '@app/components/goals-block';
import FaqBlock from '@app/components/faq-block';
import InfoBlock from '@app/components/info-block';
import RarityBlock from '@app/components/rarity-block';
import MeetTheTeamBlock from '@app/components/meet-the-team-block';
import Footer from '@app/components/footer';

export default function Home() {
  return (

      <div>
        
        {/* HEADER + NAVIGATION */}
        <Header/>

        {/* MINT BLOCK */}
        <MintBlock/>

        {/* INFORMATION BLOCK */}
        <InfoBlock/>

        {/* GOALS BLOCK */}
        <GoalsBlock/>

        {/* RARITY BLOCK */}
        <RarityBlock/>

        {/* MEET THE TEAM BLOCK */}
        <MeetTheTeamBlock/>

        {/* FAQ BLOCK */}
        <FaqBlock/>

        {/* FOOTER */}
        <Footer/>

      </div>

  )
}
