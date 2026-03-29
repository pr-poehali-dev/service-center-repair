import { useState } from "react";
import { useBranch, BRANCHES } from "@/context/BranchContext";
import Icon from "@/components/ui/icon";
import VisitorCounter from "@/components/VisitorCounter";

const SiteFooter = () => {
  const { branch, setBranch, setIsChosen } = useBranch();
  const [footerRegionOpen, setFooterRegionOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gray-400">СЕРВИС</span>
              <span className="text-red-400">КЛИК</span>
            </h3>
            <div className="relative">
              <p className="text-gray-400 text-sm mb-2">
                Ваш регион: <span className="text-white font-semibold">{branch.shortName}</span>
              </p>
              <button
                onClick={() => setFooterRegionOpen((v) => !v)}
                className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                <Icon name="MapPin" size={13} />
                Изменить регион
              </button>
              {footerRegionOpen && (
                <div className="absolute left-0 bottom-full mb-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden min-w-[200px] z-50">
                  {BRANCHES.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => { setBranch(b); setIsChosen(true); setFooterRegionOpen(false); }}
                      className={`flex items-center gap-2 w-full px-4 py-3 text-left text-sm transition-colors ${b.id === branch.id ? "bg-red-50 text-red-600 font-semibold" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      <Icon name="MapPin" size={13} className={b.id === branch.id ? "text-red-600" : "text-gray-400"} />
                      {b.shortName}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                Главный офис: Московская область, г.Королев, проспект Королева 5д,к1
              </p>
              <p>Телефон: +79220573961</p>
              Мы работаем:
              <p>Пн-Сб: 9:00 - 21:00</p>
              <p>Воскресенье -выходной день</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Ремонт смартфонов</li>
              <li>Ремонт планшетов</li>
              <li>Ремонт ноутбуков</li>
              <li>Ремонт компьютеров</li>
              <li>Ремонт принтеров и МФУ</li>
              <li>Ремонт телевизоров</li>
              <li>Продажа аксессуаров и расходных материалов для офисной техники</li>
            </ul>
          </div>
        </div>

        <VisitorCounter />

        <div className="pt-4 text-center text-gray-400">
          <p>&copy; 2024 Сервис Клик. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;