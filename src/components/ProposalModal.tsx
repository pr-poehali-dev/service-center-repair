import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ProposalModalProps {
  onClose: () => void;
}

const EQUIPMENT_OPTIONS = [
  "Оргтехнику",
  "Компьютерную технику",
  "Аудио и видео",
  "Мобильную электронику",
];

const ProposalModal = ({ onClose }: ProposalModalProps) => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    organization: "",
    inn: "",
    activity: "",
    comment: "",
  });
  const [equipment, setEquipment] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const toggleEquipment = (item: string) => {
    setEquipment((prev) =>
      prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let fileData: string | null = null;
      let fileName: string | null = null;
      let fileType: string | null = null;

      if (file) {
        fileName = file.name;
        fileType = file.type || "application/octet-stream";
        fileData = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result as string;
            resolve(result.split(",")[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }

      const res = await fetch(
        "https://functions.poehali.dev/e8c475b8-12db-4e97-85e5-36288f0e6eab",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, equipment, fileData, fileName, fileType }),
        }
      );
      if (!res.ok) throw new Error("Ошибка отправки");
      setSent(true);
    } catch {
      setError("Не удалось отправить заявку. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] flex items-start justify-center pt-8 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col animate-in slide-in-from-top duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 pb-4 flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-900">
            Коммерческое предложение
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <Icon name="X" className="text-gray-600" size={24} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 pb-6">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="Check" className="text-green-600" size={32} />
              </div>
              <p className="text-xl font-semibold text-gray-900">Заявка отправлена!</p>
              <p className="text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ФИО <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  placeholder="Иванов Иван Иванович"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Контактный номер <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Название организации <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  placeholder="ООО «Компания»"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ИНН <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.inn}
                  onChange={(e) => setForm({ ...form, inn: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  placeholder="7701234567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Вид деятельности компании <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.activity}
                  onChange={(e) => setForm({ ...form, activity: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  placeholder="Торговля, производство, услуги..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Какую технику нужно обслуживать?
                </label>
                <div className="flex flex-col gap-2">
                  {EQUIPMENT_OPTIONS.map((item) => (
                    <label
                      key={item}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        equipment.includes(item)
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-all ${
                          equipment.includes(item)
                            ? "bg-red-600 border-red-600"
                            : "border-gray-300"
                        }`}
                        onClick={() => toggleEquipment(item)}
                      >
                        {equipment.includes(item) && (
                          <Icon name="Check" className="text-white" size={12} />
                        )}
                      </div>
                      <span
                        className="text-sm text-gray-800"
                        onClick={() => toggleEquipment(item)}
                      >
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Комментарий
                </label>
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 resize-none"
                  placeholder="Дополнительная информация..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Прикрепить файл
                </label>
                <label className={`flex items-center gap-3 w-full border-2 border-dashed rounded-xl px-4 py-3 cursor-pointer transition-all ${file ? "border-red-400 bg-red-50" : "border-gray-300 hover:border-gray-400 bg-gray-50"}`}>
                  <Icon name="Paperclip" className={file ? "text-red-500" : "text-gray-400"} size={18} />
                  <span className="text-sm text-gray-600 truncate flex-1">
                    {file ? file.name : "Выберите файл (PDF, Word, изображение)"}
                  </span>
                  {file && (
                    <button
                      type="button"
                      onClick={(e) => { e.preventDefault(); setFile(null); }}
                      className="text-gray-400 hover:text-red-500 flex-shrink-0"
                    >
                      <Icon name="X" size={16} />
                    </button>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  />
                </label>
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors disabled:opacity-60"
              >
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProposalModal;