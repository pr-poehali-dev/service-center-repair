import { useEffect, useState, useRef } from "react";
import { useBranch, BRANCHES } from "@/context/BranchContext";
import Icon from "@/components/ui/icon";

const VISITORS_URL = "https://functions.poehali.dev/f172d13b-598a-40a7-9fec-b23e02d45730";
const TRACKED_KEY = "visitor_tracked";

const VisitorCounter = () => {
  const { branch } = useBranch();
  const [counts, setCounts] = useState<Record<string, number>>({});
  const tracked = useRef(false);

  useEffect(() => {
    fetch(VISITORS_URL)
      .then((r) => r.json())
      .then((data) => setCounts(data.counts || {}))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (tracked.current) return;
    const key = `${TRACKED_KEY}_${branch.id}`;
    if (sessionStorage.getItem(key)) return;
    tracked.current = true;
    sessionStorage.setItem(key, "1");
    fetch(VISITORS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch_id: branch.id }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.counted) {
          setCounts((prev) => ({ ...prev, [branch.id]: (prev[branch.id] || 0) + 1 }));
        }
      })
      .catch(() => {});
  }, [branch.id]);

  return (
    <div className="border-t border-gray-800 pt-6 pb-2">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider">
          <Icon name="Users" size={14} />
          <span>Посетили сайт</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {BRANCHES.map((b) => (
            <div
              key={b.id}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                b.id === branch.id ? "bg-gray-800" : "bg-transparent"
              }`}
            >
              <span className={`text-2xl font-bold ${b.id === branch.id ? "text-white" : "text-gray-500"}`}>
                {counts[b.id] !== undefined ? counts[b.id].toLocaleString("ru-RU") : "—"}
              </span>
              <span className={`text-xs ${b.id === branch.id ? "text-gray-300" : "text-gray-600"}`}>
                {b.shortName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
