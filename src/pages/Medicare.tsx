import Header from "@/components/Header";
import MedicareContent from "@/components/MedicareContent";
import MedicareForm from "@/components/MedicareForm";

const Medicare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        <MedicareForm />
        <MedicareContent />
      </div>
    </div>
  );
};

export default Medicare;