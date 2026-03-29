import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import RepairsList from "@/components/RepairsList";
import WorkflowSection from "@/components/WorkflowSection";
import BrandsAndEquipment from "@/components/BrandsAndEquipment";
import ReviewsSection from "@/components/ReviewsSection";

interface Repair {
  title?: string;
  icon?: string;
  image?: string;
  items?: string[];
  type?: "banner";
  text?: string;
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
  image: string;
}

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface RepairsSectionProps {
  repairs: Repair[];
  workflow: WorkflowStep[];
  brands: Brand[];
  equipment: Equipment[];
  reviews: Review[];
  contactName: string;
  contactPhone: string;
  contactMessage: string;
  onContactNameChange: (value: string) => void;
  onContactPhoneChange: (value: string) => void;
  onContactMessageChange: (value: string) => void;
  onContactSubmit: (e: React.FormEvent) => void;
}

const RepairsSection = ({
  repairs,
  workflow,
  brands,
  equipment,
  reviews,
  contactName,
  contactPhone,
  contactMessage,
  onContactNameChange,
  onContactPhoneChange,
  onContactMessageChange,
  onContactSubmit,
}: RepairsSectionProps) => {
  return (
    <>
      <RepairsList repairs={repairs} />

      <WorkflowSection workflow={workflow} />

      <section
        id="contact-form"
        className="py-12 bg-gradient-to-br from-red-500 to-red-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Сделайте заказ прямо сейчас
            </h2>
            <p className="text-xl text-red-100">
              Оставьте заявку и мы перезвоним вам в течение 10 минут
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <form onSubmit={onContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    type="text"
                    placeholder="Как к вам обращаться?"
                    value={contactName}
                    onChange={(e) => onContactNameChange(e.target.value)}
                    required
                    className="h-14 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваш телефон *
                  </label>
                  <Input
                    type="tel"
                    placeholder="8-XXX-XXX-XX-XX"
                    value={contactPhone}
                    onChange={(e) => onContactPhoneChange(e.target.value)}
                    required
                    className="h-14 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Что нужно отремонтировать?
                  </label>
                  <Textarea
                    placeholder="Опишите проблему с вашим устройством..."
                    value={contactMessage}
                    onChange={(e) => onContactMessageChange(e.target.value)}
                    rows={4}
                    className="text-lg"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-xl py-6 h-auto"
                >
                  <Icon name="Send" className="mr-2" size={24} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <BrandsAndEquipment brands={brands} equipment={equipment} />

      <ReviewsSection reviews={reviews} />
    </>
  );
};

export default RepairsSection;
