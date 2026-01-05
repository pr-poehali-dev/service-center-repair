import TrackingWidget from "@/components/TrackingWidget";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

interface Repair {
  title: string;
  icon: string;
  items: string[];
}

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  icon: string;
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
}: MainContentProps) => {
  return (
    <>
      <TrackingWidget orderNumber={orderNumber} trackingVisible={trackingVisible} />
      <ServicesSection repairs={repairs} workflow={workflow} brands={brands} equipment={equipment} />
      <ReviewsSection reviews={reviews} />
      <ContactSection
        contactName={contactName}
        contactPhone={contactPhone}
        contactMessage={contactMessage}
        onContactNameChange={onContactNameChange}
        onContactPhoneChange={onContactPhoneChange}
        onContactMessageChange={onContactMessageChange}
        onContactSubmit={onContactSubmit}
      />
    </>
  );
};

export default MainContent;
