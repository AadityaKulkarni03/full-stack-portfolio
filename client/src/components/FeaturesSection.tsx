
import { ChartPieIcon, BarChart3Icon, TrendingUpIcon, PercentIcon, LineChartIcon, ShieldIcon } from "lucide-react";

const features = [
  {
    icon: <ChartPieIcon className="h-8 w-8 text-finance-teal" />,
    title: "Sector Breakdown",
    description: "Understand your portfolio diversification across market sectors.",
  },
  {
    icon: <BarChart3Icon className="h-8 w-8 text-finance-teal" />,
    title: "Stock Analysis",
    description: "Deep dive into each stock's performance, risk, and contribution.",
  },
  {
    icon: <TrendingUpIcon className="h-8 w-8 text-finance-teal" />,
    title: "Performance Tracking",
    description: "Monitor your investment performance against benchmarks.",
  },
  {
    icon: <PercentIcon className="h-8 w-8 text-finance-teal" />,
    title: "Risk Assessment",
    description: "Evaluate portfolio risk factors and volatility metrics.",
  },
  {
    icon: <LineChartIcon className="h-8 w-8 text-finance-teal" />,
    title: "Historical Insights",
    description: "View historical performance trends and projection scenarios.",
  },
  {
    icon: <ShieldIcon className="h-8 w-8 text-finance-teal" />,
    title: "Secure Analysis",
    description: "Your data is processed locally and never stored on our servers.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-finance-lightGray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-finance-blue mb-4">
            Comprehensive Portfolio Analysis
          </h2>
          <p className="text-lg text-finance-gray max-w-2xl mx-auto">
            Transform your Excel spreadsheet into actionable investment insights with our powerful analysis tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-finance-teal/10 rounded-full p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-finance-blue mb-2">{feature.title}</h3>
              <p className="text-finance-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
