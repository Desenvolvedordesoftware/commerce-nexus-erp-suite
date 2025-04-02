
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to dashboard page
    navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">ACTHAUROS-ERP</h1>
        <p className="text-xl text-gray-600">Sistema gerencial completo Retaguarda e PDV para diversos ramos de negócio</p>
        <p className="mt-4">Redirecionando para o Dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
