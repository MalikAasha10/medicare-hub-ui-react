import Header from "@/components/Header";
import MedicareContent from "@/components/MedicareContent";
import MedicareForm from "@/components/MedicareForm";
import Footer from "@/components/Footer";

const Medicare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)]">
          <div className="order-1 xl:order-1">
            <MedicareForm />
          </div>
          <div className="order-2 xl:order-2">
            <MedicareContent />
          </div>
        </div>
      </div>
            <Footer />
    </div>
  );
};

export default Medicare;