import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import FileUploader from "@/components/FileUploader";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import VisualizationPreview from "@/components/VisualizationPreview";
import SecuritySection from "@/components/SecuritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnalysisResults from "@/components/AnalysisResults";
import { uploadPortfolioFile } from "@/services/portfolioService";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<{ stocks: string; sectors: string } | null>(null);
  const { toast } = useToast();

  const handleFileSelected = (selectedFile: File) => {
    setFile(selectedFile);
    console.log("File selected:", selectedFile.name);
  };

  const handleAnalyzePortfolio = async () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    setAnalysisResults(null);
    
    try {
      toast({
        title: "Analyzing portfolio",
        description: "Please wait while we process your file...",
      });
      
      const results = await uploadPortfolioFile(file);
      console.log("📦 Backend response:", results);
      
      setAnalysisResults(results);
      
      toast({
        title: "Analysis complete",
        description: "Your portfolio has been successfully analyzed.",
      });
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-white to-finance-blue/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-finance-blue mb-4 leading-tight">
                Visualize Your Portfolio In Seconds
              </h1>
              <p className="text-xl text-finance-gray mb-8">
                Upload your investment Excel spreadsheet and instantly see your sector allocation and stock diversification.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg" 
                  className="bg-finance-teal hover:bg-finance-teal/90 text-white"
                  onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Analyze My Portfolio
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-finance-gray/30 text-finance-gray hover:bg-finance-blue/5"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  How It Works
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 relative">
                <div className="absolute -top-3 -right-3 bg-finance-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Free
                </div>
                <h3 className="text-xl font-bold text-finance-blue mb-4">Stock Portfolio Example</h3>
                <div className="overflow-auto max-h-64 mb-4">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price ($)</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value ($)</th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">AAPL</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">15</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">172.50</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">2,587.50</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Technology</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">MSFT</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">10</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">340.25</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">3,402.50</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Technology</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">JPM</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">20</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">152.60</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">3,052.00</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Financials</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">JNJ</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">12</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">165.30</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">1,983.60</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Healthcare</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">HD</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">8</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">300.20</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">2,401.60</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Consumer Cyclical</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-finance-gray mb-4">
                  Upload your own Excel file with similar columns to get your portfolio analysis.
                </p>
                <Button 
                  className="w-full bg-finance-blue hover:bg-finance-blue/90 text-white flex items-center justify-center gap-2"
                  onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start My Analysis
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upload section */}
      <section id="upload-section" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-finance-blue mb-4">
                Upload Your Portfolio
              </h2>
              <p className="text-lg text-finance-gray">
                Drag and drop your Excel or CSV file below to visualize your portfolio's sector allocation and stock distribution.
              </p>
            </div>
            
            <FileUploader 
              onFileSelected={handleFileSelected}
              className="mb-8"
            />
            
            {file && (
              <div className="flex justify-center mb-8">
                <Button 
                  onClick={handleAnalyzePortfolio} 
                  disabled={isAnalyzing}
                  className="bg-finance-teal hover:bg-finance-teal/90 text-white"
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Portfolio"}
                </Button>
              </div>
            )}
            
            {(isAnalyzing || analysisResults) && (
              <div className="mt-8">
                <AnalysisResults 
                  stocksHtml={analysisResults?.stocks || ""} 
                  sectorsHtml={analysisResults?.sectors || ""} 
                  isLoading={isAnalyzing}
                />
              </div>
            )}
            
            <div className="text-center text-sm text-finance-gray">
              <p className="mb-2">Supported formats: .xlsx, .xls, .ods, .csv</p>
              <p>Your data is processed locally and is never stored on our servers.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Visualization Preview */}
      <VisualizationPreview />
      
      {/* Security Section */}
      <SecuritySection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;