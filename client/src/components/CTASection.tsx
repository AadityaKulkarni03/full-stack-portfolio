
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-finance-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Analyze Your Portfolio?
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Upload your Excel file now and get instant insights into your investments.
          No registration required.
        </p>
        <Button 
          size="lg"
          className="bg-white text-finance-blue hover:bg-white/90 inline-flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Analyze My Portfolio
          <ArrowRight className="h-5 w-5" />
        </Button>
        <p className="mt-6 text-sm text-white/70">
          Free to use. Your data never leaves your browser.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
