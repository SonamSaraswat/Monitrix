import React from 'react'
import { assets } from '../../assets/assets'
import './refer.css'

const Refer = () => {
  return (
    <div className='refer'>
      <div className="refer-contents">
        <img src={assets.r1} />
        <h1>Refer to Earn With Monitrix</h1>
        <img src={assets.m} />
        <p>At Monitrix, we believe in rewarding our valued clients for their trust and support. Introducing our Refer to Earn program – an exciting opportunity for existing clients to refer new customers to us and enjoy exclusive benefits in return. Share the Monitrix experience with your friends, family, or colleagues, and let us take care of the rest!</p>
      </div>
      <h1 className='refer1-heading'>How It Works</h1>

      <div className="refer-item-1">
        <ol>
          <li> Refer a Friend: As an existing Monitrix client, simply fill out the referral form below with the details of the person you’d like to refer.</li>
          <li>They Join Us: When your referred friend signs up for any of our services, they become part of the Monitrix family.</li>
          <li>You Earn Rewards: Once their subscription or service is confirmed, you unlock your rewards!</li>
        </ol>
        <img src={assets.r2} />
      </div>
      <div className="refer-item-2">
        <img src={assets.r3} />
        <p>We’ve designed our Refer to Earn program to give you flexibility and value:
          – Instant Discount: Enjoy 10% off on all Monitrix services for every successful referral. Use it right away on your current plan or any other service.
          – Credit Points Option: Don’t need the discount now? No problem! Opt for Credit Points instead. These points can be saved and redeemed anytime on any Monitrix service – the choice is yours!
          – <br /><b>Unlimited Referrals: There’s no limit to how many friends you can refer. The more you refer, the more you earn.</b></p>
      </div>
      <div className="refer-item-3">
        <h1>Why Refer Monitrix?</h1>
        <ol>
          <li>Reliable Services: Share the confidence of working with a trusted partner.</li>
          <li> Hassle-Free Process: Referring is simple, and we handle everything from there.</li>
          <li>Mutual Benefits: Your friends get top-notch services, and you enjoy exclusive rewards.</li>
        </ol>
        <b>“You don’t need to worry – Monitrix is here for you, buddy!”</b>
        <p>We’re committed to making your experience seamless and rewarding. Refer your friends today and unlock savings or credits to use whenever you like.</p>
        <b>Ready to Start?</b>
        <p>Fill out the form below to refer a friend and kickstart your Refer to Earn journey with Monitrix!</p>
        <b className='f'>Registration Form</b>
        </div>
        <div className="refer-last">
          <b>Refer a friend, earn 10% off – or save your credits for later!”</b>
          <img src={assets.referral} />
        </div>

    </div>
  )
}

export default Refer