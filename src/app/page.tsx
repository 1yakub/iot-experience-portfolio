'use client'

import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import FeaturesSection from '../components/home/FeaturesSection'
import TechnologiesSection from '../components/home/TechnologiesSection'
import ReviewSection from '../components/home/ReviewSection'
import CallToAction from '../components/home/CallToAction'
import IoTDashboardPreview from '../components/home/IoTDashboardPreview'
import IoTUseCasesSection from '../components/home/IoTUseCasesSection'
import IoTSecuritySection from '../components/home/IoTSecuritySection'
import IoTConnectivitySection from '../components/home/IoTConnectivitySection'
import EnterpriseIoTSection from '../components/home/EnterpriseIoTSection'
import IoTAnalyticsSection from '../components/home/IoTAnalyticsSection'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <IoTDashboardPreview />
      <FeaturesSection />
      <IoTConnectivitySection />
      <TechnologiesSection />
      <IoTAnalyticsSection />
      <IoTSecuritySection />
      <EnterpriseIoTSection />
      <IoTUseCasesSection />
      <StatsSection />
      <ReviewSection />
      <CallToAction />
    </main>
  )
}
