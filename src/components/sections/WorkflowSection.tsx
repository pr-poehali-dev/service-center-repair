import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface WorkflowSectionProps {
  workflow: WorkflowStep[];
}

const WorkflowSection = ({ workflow }: WorkflowSectionProps) => {
  return (
    <section id="workflow" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-600 text-white px-6 py-2 text-base">
            Процесс
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600">
            Простой и прозрачный процесс ремонта
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {workflow.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-xl transition-all border-2 hover:border-orange-300">
                  <CardContent className="pt-6">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-4">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <Icon
                      name="ArrowRight"
                      className="text-orange-600"
                      size={24}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
