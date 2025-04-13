
import { Card } from "@/components/ui/card";

const VisualizationPreview = () => {
  return (
    <section className="py-16 bg-finance-blue/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-finance-blue mb-4">
            See Your Data Transformed
          </h2>
          <p className="text-lg text-finance-gray max-w-2xl mx-auto">
            Our analysis provides clear visualizations of your portfolio data
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-finance-blue mb-4">Sector Distribution</h3>
            <p className="text-finance-gray mb-6">
              Understand your exposure across different market sectors at a glance. Identify concentration risks and diversification opportunities with our intuitive pie chart visualization.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-finance-gray">Technology - 32%</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                <span className="text-finance-gray">Financials - 24%</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-3"></div>
                <span className="text-finance-gray">Healthcare - 18%</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-purple-500 mr-3"></div>
                <span className="text-finance-gray">Consumer Cyclical - 15%</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                <span className="text-finance-gray">Energy - 11%</span>
              </div>
            </div>
          </div>

          {/* Fake Pie Chart */}
          <Card className="p-6 shadow-lg bg-white flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* These elements create a simple pie chart visualization */}
              <div 
                className="absolute inset-0 bg-blue-500 rounded-full"
                style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 75% 75%)' }}
              ></div>
              <div 
                className="absolute inset-0 bg-green-500 rounded-full"
                style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}
              ></div>
              <div 
                className="absolute inset-0 bg-yellow-500 rounded-full"
                style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 75%)' }}
              ></div>
              <div 
                className="absolute inset-0 bg-purple-500 rounded-full"
                style={{ clipPath: 'polygon(50% 50%, 0% 75%, 0% 25%, 25% 25%)' }}
              ></div>
              <div 
                className="absolute inset-0 bg-red-500 rounded-full"
                style={{ clipPath: 'polygon(50% 50%, 25% 25%, 50% 0%)' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full w-20 h-20"></div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <Card className="p-6 shadow-lg bg-white flex items-center justify-center order-2 md:order-1">
            {/* Fake Bar Chart */}
            <div className="h-64 w-full flex items-end justify-between space-x-4 pt-10">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-finance-blue h-40 w-12 rounded-t-md"></div>
                <span className="text-xs text-finance-gray">AAPL</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-finance-blue h-28 w-12 rounded-t-md"></div>
                <span className="text-xs text-finance-gray">MSFT</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-finance-blue h-52 w-12 rounded-t-md"></div>
                <span className="text-xs text-finance-gray">AMZN</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-finance-blue h-24 w-12 rounded-t-md"></div>
                <span className="text-xs text-finance-gray">GOOG</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-finance-blue h-36 w-12 rounded-t-md"></div>
                <span className="text-xs text-finance-gray">META</span>
              </div>
            </div>
          </Card>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-finance-blue mb-4">Individual Stock Analysis</h3>
            <p className="text-finance-gray mb-6">
              Dive deep into your individual stock holdings. See which positions contribute most to your portfolio value and understand your allocation across different securities.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-finance-teal text-white text-sm mr-3">✓</span>
                <span className="text-finance-gray">Position size comparison</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-finance-teal text-white text-sm mr-3">✓</span>
                <span className="text-finance-gray">Percentage of portfolio</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-finance-teal text-white text-sm mr-3">✓</span>
                <span className="text-finance-gray">Profit/loss visualization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualizationPreview;
