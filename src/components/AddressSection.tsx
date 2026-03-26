import { Badge } from "@/components/ui/badge";
import { useBranch } from "@/context/BranchContext";

const AddressSection = () => {
  const { branch } = useBranch();

  return (
    <section id="address" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-red-600 text-white px-6 py-2 text-base">
            Адрес
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Как нас найти
          </h2>
          <p className="text-xl text-gray-600">{branch.address}</p>
        </div>

        <div className="max-w-5xl mx-auto mb-6 bg-white rounded-2xl shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🕐</span> Режим работы
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {branch.workingHours.map((row) => (
              <div
                key={row.days}
                className={`rounded-xl px-4 py-3 text-center ${row.hours === "Выходной" ? "bg-gray-100 text-gray-400" : "bg-red-50 text-gray-800"}`}
              >
                <div className="text-sm font-semibold mb-1">{row.days}</div>
                <div className="text-base font-bold">{row.hours}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
          <iframe
            key={branch.id}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${branch.lon - 0.01}%2C${branch.lat - 0.006}%2C${branch.lon + 0.01}%2C${branch.lat + 0.006}&layer=mapnik&marker=${branch.lat}%2C${branch.lon}`}
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen={true}
            style={{ border: 0, display: "block" }}
            title="Схема проезда"
          />
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
