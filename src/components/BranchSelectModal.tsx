import { useState } from "react";
import { BRANCHES, useBranch } from "@/context/BranchContext";
import Icon from "@/components/ui/icon";

const BranchSelectModal = ({ forceOpen, onClose }: { forceOpen?: boolean; onClose?: () => void }) => {
  const { isChosen, isDetecting, setBranch, setIsChosen, detectedBranch } = useBranch();
  const [showList, setShowList] = useState(false);

  if (isDetecting) return null;
  if (!forceOpen && isChosen) return null;

  const handleConfirm = () => {
    if (detectedBranch) {
      setBranch(detectedBranch);
    }
    setIsChosen(true);
    onClose?.();
  };

  const handleSelect = (branchId: string) => {
    const b = BRANCHES.find((br) => br.id === branchId)!;
    setBranch(b);
    setIsChosen(true);
    onClose?.();
  };

  if (!showList && detectedBranch) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 animate-in zoom-in-95 duration-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Icon name="MapPin" className="text-white" size={32} />
            </div>
            <p className="text-gray-500 text-sm mb-2">Мы определили ваш регион</p>
            <h2 className="text-2xl font-bold text-gray-900">
              {detectedBranch.name}
            </h2>
            <p className="text-gray-400 text-sm mt-1">{detectedBranch.address}</p>
          </div>

          <p className="text-center text-gray-600 mb-6">Всё верно?</p>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleConfirm}
              className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors duration-200"
            >
              Да, верно
            </button>
            <button
              onClick={() => setShowList(true)}
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
            >
              Выбрать другой регион
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Icon name="MapPin" className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Выберите ваш регион
          </h2>
          <p className="text-gray-500 text-sm">
            Чтобы показать актуальные контакты и адрес
          </p>
        </div>

        <div className="space-y-3">
          {BRANCHES.map((branch) => (
            <button
              key={branch.id}
              onClick={() => handleSelect(branch.id)}
              className="w-full flex items-center gap-4 p-5 bg-gray-50 hover:bg-red-50 rounded-xl border-2 border-gray-200 hover:border-red-400 transition-all duration-200 group text-left"
            >
              <div className="w-12 h-12 bg-white border-2 border-gray-200 group-hover:border-red-400 rounded-full flex items-center justify-center shrink-0 transition-colors">
                <Icon name="MapPin" className="text-red-500" size={22} />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg leading-tight">
                  {branch.name}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">
                  {branch.address}
                </div>
              </div>
              <Icon name="ChevronRight" className="text-gray-400 group-hover:text-red-500 ml-auto shrink-0 transition-colors" size={20} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchSelectModal;
