import { useState } from "react";
import Form from "./Form";

const App = () => {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismo valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = () => {
    console.log("Enviando datos al servidor...");
  };

  return (
    <div>
      <form className="form" onSubmit={(ev) => ev.preventDefault()}>
        <Form
          name={name}
          email={email}
          region={region}
          paymentType={paymentType}
          legalTerms={legalTerms}
          handleName={handleName}
          handleEmail={handleEmail}
          handleRegion={handleRegion}
          handlePaymentType={handlePaymentType}
          handleLegalTerms={handleLegalTerms}
          handleForm={handleForm}
          handleResetButton={handleResetButton}
        />
      </form>
    </div>
  );
};

export default App;
