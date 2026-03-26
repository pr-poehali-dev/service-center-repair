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
}

export const BRANCHES: Branch[] = [
  {
    id: "irkutsk",
    name: "Иркутская область",
    shortName: "Иркутск",
    phone: "+79220573961",
    phoneTel: "+79220573961",
    address: "г. Иркутск, ул. Рабочего Штаба 78",
    addressLines: ["г. Иркутск,", "ул. Рабочего Штаба 78,", "здание супермаркета Слата, 2 этаж"],
    telegram: "element5_irk",
    maxUrl: "https://max.ru/u/f9LHodD0cOJOJD6hay1PE3q1ZFF_exVhKKicYndizHkk533C6c0J2a4d-F0",
    lat: 52.317768,
    lon: 104.302578,
    city: "irkutsk",
  },
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
    lat: 55.932,
    lon: 37.8145,
    city: "moscow",
  },
];

interface BranchContextType {
  branch: Branch;
  setBranch: (branch: Branch) => void;
  isChosen: boolean;
  setIsChosen: (v: boolean) => void;
}

const BranchContext = createContext<BranchContextType>({
  branch: BRANCHES[0],
  setBranch: () => {},
  isChosen: false,
  setIsChosen: () => {},
});

export const BranchProvider = ({ children }: { children: ReactNode }) => {
  const [branch, setBranchState] = useState<Branch>(() => {
    const saved = localStorage.getItem("branch");
    return BRANCHES.find((b) => b.id === saved) ?? BRANCHES[0];
  });
  const [isChosen, setIsChosen] = useState(() => !!localStorage.getItem("branch"));

  const setBranch = (b: Branch) => {
    localStorage.setItem("branch", b.id);
    setBranchState(b);
  };

  return (
    <BranchContext.Provider value={{ branch, setBranch, isChosen, setIsChosen }}>
      {children}
    </BranchContext.Provider>
  );
};

export const useBranch = () => useContext(BranchContext);

export default BranchContext;
