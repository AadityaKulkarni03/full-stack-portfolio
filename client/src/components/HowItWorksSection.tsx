
import { FileSpreadsheet, Upload, BarChart4, LineChart } from "lucide-react";

const steps = [
  {
    icon: <FileSpreadsheet className="h-10 w-10 text-white" />,
    title: "Prepare Your Excel File",
    description: "Organize your portfolio data in an Excel spreadsheet with columns for stock symbols, quantities, and purchase prices.",
    color: "bg-finance-blue",
  },
  {
    icon: <Upload className="h-10 w-10 text-white" />,
    title: "Upload Your File",
    description: "Simply drag and drop your Excel file into our secure uploader. Your data never leaves your computer.",
    color: "bg-finance-teal",
  },
  {
    icon: <BarChart4 className="h-10 w-10 text-white" />,
    title: "Get Sector Analysis",
    description: "Instantly view how your investments are distributed across different market sectors.",
    color: "bg-finance-green",
  },
  {
    icon: <LineChart className="h-10 w-10 text-white" />,
    title: "Review Stock Performance",
    description: "Explore detailed performance metrics for each stock in your portfolio.",
    color: "bg-finance-blue",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-finance-blue mb-4">
            How It Works
          </h2>
          <p className="text-lg text-finance-gray max-w-2xl mx-auto">
            Four simple steps to transform your Excel data into valuable portfolio insights
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8 relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-24 left-1/2 h-0.5 bg-finance-gray/20 -translate-x-1/2 w-[80%]" aria-hidden="true" />

          {steps.map((step, index) => (
            <div key={index} className="md:flex-1 relative flex flex-col items-center text-center z-10 w-full md:max-w-xs">
              <div className={`${step.color} rounded-full p-4 mb-6 shadow-md`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-finance-blue mb-2">{step.title}</h3>
              <p className="text-finance-gray">{step.description}</p>
              
              {/* Step number indicator (visible on mobile only) */}
              <div className="md:hidden absolute top-4 right-4 bg-finance-blue/10 text-finance-blue rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              
              {/* Step number indicator (visible on desktop only) */}
              <div className="hidden md:flex absolute top-0 -mt-2 left-1/2 -translate-x-1/2 bg-white border-2 border-finance-blue text-finance-blue rounded-full h-7 w-7 items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
