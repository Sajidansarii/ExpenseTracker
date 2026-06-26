const SummaryCards = ({budget, totalExpenses}) => {

const cards = [
  {
    title: "Total Budget",
    value: `₹${budget}`,
  },
  {
    title: "Total Expenses",
    value: `₹${totalExpenses}`,
  },
  {
    title: "Remaining Budget",
    value:  `₹${budget - totalExpenses}`,
  },
]; 




  return (
    <div className="grid md:grid-cols-3 gap-5 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-gray-50 rounded-xl shadow-sm p-6 text-center">

          <p className="text-gray-500 text-sm">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;