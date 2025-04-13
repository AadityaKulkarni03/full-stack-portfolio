
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    position: "Individual Investor",
    content: "This tool completely changed how I view my portfolio. I used to struggle with understanding my sector exposure, but now I can see it clearly in seconds after uploading my Excel sheet.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "Sarah Johnson",
    position: "Financial Advisor",
    content: "I recommend PortfolioVision to all my clients. The ability to quickly visualize their holdings and sector distribution saves me hours of work and helps them understand my recommendations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    name: "David Rodriguez",
    position: "Retirement Planner",
    content: "The simplicity of uploading an Excel file and getting instant insights is remarkable. It helps me explain complex portfolio concepts to my clients with clear visuals.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-finance-blue/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-finance-blue mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-finance-gray max-w-2xl mx-auto">
            Discover how PortfolioVision has helped investors understand their holdings better
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-finance-blue">{testimonial.name}</h4>
                    <p className="text-sm text-finance-gray">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-finance-gray italic">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
