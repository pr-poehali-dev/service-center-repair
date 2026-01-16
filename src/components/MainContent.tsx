import TrackingSection from "@/components/sections/TrackingSection";
import RepairsSection from "@/components/sections/RepairsSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import ContactSection from "@/components/sections/ContactSection";

interface Repair {
  title: string;
  icon: string;
  image: string;
  items: string[];
}

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface Brand {
  name: string;
  popular: boolean;
}

interface Equipment {
  name: string;
  description: string;
  icon: string;
}

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface MainContentProps {
  repairs: Repair[];
  workflow: WorkflowStep[];
  brands: Brand[];
  equipment: Equipment[];
  reviews: Review[];
  orderNumber: string;
  trackingVisible: boolean;
  contactName: string;
  contactPhone: string;
  contactMessage: string;
  onContactNameChange: (value: string) => void;
  onContactPhoneChange: (value: string) => void;
  onContactMessageChange: (value: string) => void;
  onContactSubmit: (e: React.FormEvent) => void;
  onRouteClick: () => void;
}

const MainContent = ({
  repairs,
  workflow,
  brands,
  equipment,
  reviews,
  orderNumber,
  trackingVisible,
  contactName,
  contactPhone,
  contactMessage,
  onContactNameChange,
  onContactPhoneChange,
  onContactMessageChange,
  onContactSubmit,
  onRouteClick,
}: MainContentProps) => {
  return (
    <>
      <TrackingSection 
        orderNumber={orderNumber} 
        trackingVisible={trackingVisible} 
      />
      <RepairsSection repairs={repairs} />
      <WorkflowSection workflow={workflow} />
      <ContactSection
        brands={brands}
        equipment={equipment}
        reviews={reviews}
        contactName={contactName}
        contactPhone={contactPhone}
        contactMessage={contactMessage}
        onContactNameChange={onContactNameChange}
        onContactPhoneChange={onContactPhoneChange}
        onContactMessageChange={onContactMessageChange}
        onContactSubmit={onContactSubmit}
        onRouteClick={onRouteClick}
      />
    </>
  );
};

export default MainContent;
