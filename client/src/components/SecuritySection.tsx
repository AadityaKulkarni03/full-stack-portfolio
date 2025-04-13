
import { Shield, Lock, FileX } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-finance-blue mb-4">
            Your Data Stays Private
          </h2>
          <p className="text-lg text-finance-gray">
            We take your privacy and data security seriously. Our service processes all data directly in your browser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-finance-blue/5 p-6 rounded-lg text-center">
            <div className="mx-auto w-16 h-16 bg-finance-blue/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-finance-blue" />
            </div>
            <h3 className="text-xl font-semibold text-finance-blue mb-2">Local Processing</h3>
            <p className="text-finance-gray">
              All analysis happens directly in your browser. Your financial data never leaves your computer.
            </p>
          </div>

          <div className="bg-finance-blue/5 p-6 rounded-lg text-center">
            <div className="mx-auto w-16 h-16 bg-finance-blue/10 rounded-full flex items-center justify-center mb-4">
              <FileX className="h-8 w-8 text-finance-blue" />
            </div>
            <h3 className="text-xl font-semibold text-finance-blue mb-2">No Data Storage</h3>
            <p className="text-finance-gray">
              We don't store or save your uploaded files or analysis results on our servers.
            </p>
          </div>

          <div className="bg-finance-blue/5 p-6 rounded-lg text-center">
            <div className="mx-auto w-16 h-16 bg-finance-blue/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-finance-blue" />
            </div>
            <h3 className="text-xl font-semibold text-finance-blue mb-2">Secure Connection</h3>
            <p className="text-finance-gray">
              Our website uses HTTPS encryption to ensure a secure connection between your browser and our servers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
