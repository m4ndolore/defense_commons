import Hero from "@/components/home/Hero";
import DayOneValue from "@/components/home/DayOneValue";
import RoleSpecificHooks from "@/components/home/RoleSpecificHooks";
import ImpactStats from "@/components/home/ImpactStats";
import HowItWorks from "@/components/home/HowItWorks";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function YCHome() {
  return (
    <>
      <Hero />
      <DayOneValue />
      <RoleSpecificHooks />
      <ImpactStats />
      <HowItWorks />
      <ClosingCTA />
    </>
  );
}
