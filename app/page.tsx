import Hero from "@/components/Hero";
import RecentNews from "@/components/RecentNews";
import VideoSection from "@/components/VideoSection";
import InitiativesMosaic from "@/components/InitiativesMosaic";
import PresidentMessage from "@/components/PresidentMessage";
import QuestionsSection from "@/components/QuestionsSection";

// Force dynamic rendering because RecentNews queries the database
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <Hero />
      <RecentNews />
      <VideoSection />
      <InitiativesMosaic />
      <PresidentMessage />
      <QuestionsSection />
    </>
  );
}
