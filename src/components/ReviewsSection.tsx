import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <>
      <section id="reviews" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600 text-white px-6 py-2 text-base">
              Отзывы
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы довольных клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Узнайте, что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-2 hover:border-red-300 transition-all hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-yellow-400 fill-yellow-400"
                        size={18}
                      />
                    ))}
                  </div>
                  <p className="text-base text-gray-700">{review.text}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Поздравляем — вы просмотрели наш сайт до конца!
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Вам подарок! Предъявите промокод и получите скидку{" "}
            <span className="font-bold">10%</span> на нашу работу.
          </p>
          <div className="inline-block bg-white rounded-2xl px-10 py-5 shadow-xl">
            <p className="text-sm text-gray-500 mb-1 uppercase tracking-widest font-medium">
              Ваш промокод
            </p>
            <p className="text-4xl font-extrabold text-orange-500 tracking-wider">
              удача2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
