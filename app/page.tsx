"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { CircleDollarSign, X } from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
interface ProgressChartProps {
  data: { day: string; submissions: number; purchase: number }[];
}

const ProgressChart = ({ data }: ProgressChartProps) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" domain={[0, 1000]} />
      <Tooltip />
      <Line yAxisId="left" type="monotone" dataKey="submissions" stroke="#000" />
      <Line yAxisId="right" type="monotone" dataKey="purchase" stroke="#22c55e" />
    </LineChart>
  </ResponsiveContainer>
);


const HistoryEntry = ({ icon, title, subtitle, amount, iconColor }: any) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-none">
    <div className={`w-8 h-8 ${iconColor} rounded-full flex items-center justify-center`}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="font-bold text-lg">{title}</div>
      <div className="text-sm text-emerald-500">{subtitle} {amount}</div>
    </div>
  </div>
);


export default function ChartsPage() {
  const [mode, setMode] = useState<"buy" | "earn">("buy");
  const [amount, setAmount] = useState("");

  const chartData = [
    { day: "M", submissions: 6, purchase: 8 },
    { day: "T", submissions: 4, purchase: 10 },
    { day: "W", submissions: 4, purchase: 12 },
    { day: "T", submissions: 8, purchase: 14 },
    { day: "F", submissions: 7, purchase: 16 },
    { day: "S", submissions: 7, purchase: 17 },
    { day: "S", submissions: 7, purchase: 19 },
  ];

  const historyData = [
    {
      icon: <CircleDollarSign className="w-5 h-5" />,
      title: "Bought $50 worth of tokens",
      subtitle: "+",
      amount: "2,000 Tokens",
      iconColor: "bg-yellow-400",
    },
    {
      icon: <X className="w-5 h-5" />,
      title: "X Content added",
      subtitle: "+",
      amount: "200 Tokens",
      iconColor: "bg-yellow-400",
    },
  ];

  const amountOptions = ["50", "500", "1000"];

  return (
    <div className="space-y-4 p-4">
      <div className="h-[300px] mb-4">
        <ProgressChart data={chartData} />
      </div>

      <h2 className="text-3xl font-bold mb-4">$superteam Culture Token</h2>

      <div className="flex p-1 bg-white rounded-full mb-4">
        <Button
          variant="ghost"
          className={`flex-1 rounded-full px-3 py-6 text-lg font-semibold ${mode === "buy" ? "bg-yellow-400 hover:bg-yellow-500" : ""}`}
          onClick={() => setMode("buy")}
        >
          I want to Buy
        </Button>
        <Button
          variant="ghost"
          className={`flex-1 rounded-full text-lg px-3 py-6 font-semibold ${mode === "earn" ? "bg-yellow-400 hover:bg-yellow-500" : ""}`}
          onClick={() => setMode("earn")}
        >
          I want to Earn
        </Button>
      </div>

      {mode === "buy" ? (
        <div className="space-y-4">
          <Input
            placeholder="$ Amount"
            className="p-7 text-gray-400 text-lg font-medium bg-white rounded-full border-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex gap-2 justify-between">
            {amountOptions.map((opt, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex-1 text-lg p-6 border-none text-gray-400 bg-white rounded-full"
                onClick={() => setAmount(opt)}
              >
                $ {opt}
              </Button>
            ))}
          </div>
          <Button className="w-full text-black text-lg p-6 font-semibold rounded-full border-none bg-yellow-400 hover:bg-yellow-500">
            Buy
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <Input
            placeholder="Social Post Public Link"
            className="p-7 text-gray-400 text-lg font-medium bg-white rounded-full border-none"
          />
          <Button className="w-full text-black text-lg p-6 font-semibold rounded-full border-none bg-yellow-400 hover:bg-yellow-500">
            Submit
          </Button>
        </div>
      )}

     
      <div className="space-y-2 pt-4">
        <h3 className="font-bold text-3xl">Bonding Curve Progress</h3>
        <div className="relative pt-4">
          <Progress value={15} className="h-2" />
          <div className="flex justify-between text-lg font-medium text-gray-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
        <p className="text-base font-semibold text-gray-400 tracking-wide">
          Graduate this coin to uniswap at $69,420 market cap. The bonding curve value is $19,972.
        </p>
      </div>

     
      <div className="space-y-2">
        <h3 className="font-bold text-3xl">Culture Book Curve Progress</h3>
        <p className="text-base font-semibold text-gray-400">8 Weeks / 8%</p>
      </div>

   
      <div className="space-y-3">
        <h3 className="font-bold text-3xl">History</h3>
        <div className="text-base font-semibold text-gray-400">TODAY</div>
        <div className="space-y-2">
          {historyData.map((entry, index) => (
            <HistoryEntry
              key={index}
              icon={entry.icon}
              title={entry.title}
              subtitle={entry.subtitle}
              amount={entry.amount}
              iconColor={entry.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
