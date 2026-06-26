import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Travel", value: 30 },
  { name: "Food", value: 25 },
  { name: "Groceries", value: 20 },
  { name: "Health", value: 25 },
];

const barData = [
  { name: "Jan", amount: 200 },
  { name: "Feb", amount: 400 },
  { name: "Mar", amount: 250 },
  { name: "Apr", amount: 500 },
  { name: "May", amount: 350 },
  { name: "Jun", amount: 250 },
  { name: "Jul", amount: 200 },
];

const colors = [
  "#4F46E5",
  "#F97316",
  "#22C55E",
  "#3B82F6",
];

const ChartSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mb-10">
      <div>
        <h3 className="font-semibold text-center mb-4">
          Expense Chart
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell
                  key={index}
                  fill={colors[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="font-semibold text-center mb-4">
          Expenses Tracker
        </h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <Bar dataKey="amount" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;