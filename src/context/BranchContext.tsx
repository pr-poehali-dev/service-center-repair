import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Branch {
  id: string;
  name: string;
  shortName: string;
  phone: string;
  phoneTel: string;
  address: string;
  addressLines: string[];
  telegram: string | null;
  maxUrl: string;
  lat: number;
  lon: number;
  city: string;
  workingHours: { days: string; hours: string }[];
}

export const BRANCHES: Branch[] = [
  {
    id: "moscow",
    name: "Московская область",
    shortName: "Королёв",
    phone: "+79220573961",
    phoneTel: "+79220573961",
    address: "г. Королёв, пр. Королёва 5д, к1",
    addressLines: ["г. Королёв,", "пр. Королёва 5д, к1"],
    telegram: null,
    maxUrl: "https://max.ru/u/f9LHodD0cOINFOgagFqOueCYFwY3LvsfLiFjf_6XipuOhHDXq78ArFpWbXo",
    lat: 55.92184,
    lon: 37.843481,
    city: "moscow",
    workingHours: [
      { days: "Пн–Пт", hours: "9:00 – 21:00" },
      { days: "Суббота", hours: "9:00 – 21:00" },
      { days: "Воскресенье", hours: "Выходной" },
    ],
  },
  {
    id: "irkutsk",
    name: "Иркутская область",
    shortName: "Иркутск",
    phone: "+73952407405",
    phoneTel: "+73952407405",
    address: "г. Иркутск, ул. Рабочего Штаба 80",
    addressLines: ["г. Иркутск,", "ул. Рабочего Штаба 80,", "здание супермаркета Слата, 2 этаж"],
    telegram: "element5_irk",
    maxUrl: "https://max.ru/u/f9LHodD0cOLgxe4XB1Ih1XpZssZV97CCsvyEip8PtyHwWACwWA5WLcm8dbo",
    lat: 52.317736,
    lon: 104.302618,
    city: "irkutsk",
    workingHours: [
      { days: "Пн–Пт", hours: "9:00 – 19:00" },
      { days: "Суббота", hours: "10:00 – 16:00" },
      { days: "Воскресенье", hours: "Выходной" },
    ],
  },
];

const MOSCOW_BRANCH = BRANCHES[0];
const IRKUTSK_BRANCH = BRANCHES[1];

async function detectBranchByIp(): Promise<Branch | null> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) return null;
    const data = await res.json();
    const regionRaw: string = (data.region || "").toLowerCase();
    const cityRaw: string = (data.city || "").toLowerCase();
    if (regionRaw.includes("irkutsk") || regionRaw.includes("иркутск") || cityRaw.includes("irkutsk") || cityRaw.includes("иркутск")) {
      return IRKUTSK_BRANCH;
    }
    if (regionRaw.includes("moscow") || regionRaw.includes("московская") || cityRaw.includes("korolev") || cityRaw.includes("королёв") || cityRaw.includes("korolyov")) {
      return MOSCOW_BRANCH;
    }
    return null;
  } catch {
    return null;
  }
}

interface BranchContextType {
  branch: Branch;
  setBranch: (branch: Branch) => void;
  isChosen: boolean;
  setIsChosen: (v: boolean) => void;
  isDetecting: boolean;
}

const BranchContext = createContext<BranchContextType>({
  branch: BRANCHES[0],
  setBranch: () => {},
  isChosen: false,
  setIsChosen: () => {},
  isDetecting: true,
});

export const BranchProvider = ({ children }: { children: ReactNode }) => {
  const [branch, setBranchState] = useState<Branch>(() => {
    const saved = localStorage.getItem("branch");
    return BRANCHES.find((b) => b.id === saved) ?? BRANCHES[0];
  });
  const [isChosen, setIsChosen] = useState(() => !!localStorage.getItem("branch"));
  const [isDetecting, setIsDetecting] = useState(() => !localStorage.getItem("branch"));

  useEffect(() => {
    if (localStorage.getItem("branch")) return;
    detectBranchByIp().then((detected) => {
      if (detected) {
        setBranchState(detected);
        localStorage.setItem("branch", detected.id);
        setIsChosen(true);
      }
      setIsDetecting(false);
    });
  }, []);

  const setBranch = (b: Branch) => {
    localStorage.setItem("branch", b.id);
    setBranchState(b);
  };

  return (
    <BranchContext.Provider value={{ branch, setBranch, isChosen, setIsChosen, isDetecting }}>
      {children}
    </BranchContext.Provider>
  );
};

export const useBranch = () => useContext(BranchContext);

export default BranchContext;