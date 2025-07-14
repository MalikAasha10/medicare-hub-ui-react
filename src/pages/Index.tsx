import Header from "@/components/Header";
import MedicareForm from "@/components/MedicareForm";
import MedicareContent from "@/components/MedicareContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <MedicareForm />
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <MedicareContent />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2024 Reliance Covers. All rights reserved. | Licensed insurance professionals.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
