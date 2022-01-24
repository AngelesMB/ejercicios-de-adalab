import { useState } from "react";
import Button from "./Button";
import InputGroupCheck from "./InputGroupCheck";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupText from "./InputGroupText";
import Preview from "./Preview";

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

  // Funciones que nos ayudan a renderizar

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={(ev) => ev.preventDefault()}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <InputGroupText
            labelText="Escribe un nombre:"
            inputName="name"
            inputId="name"
            inputPlaceholder="María García"
            value={name}
            handleChange={handleName}
          />

          {/* email */}
          <InputGroupText
            labelText="Escribe un email:"
            inputName="name"
            inputId="email"
            inputPlaceholder="mariagarcia@gmail.com"
            value={email}
            handleChange={handleEmail}
          />

          {/* region */}
          <InputGroupSelect value={region} handleChange={handleRegion} />
          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>
          <InputGroupRadio
            id="creditCard"
            name="Tarjeta de Crédito"
            paymentType={paymentType}
            handleChange={handlePaymentType}
          />
          <InputGroupRadio
            id="cash"
            name="Efectivo"
            paymentType={paymentType}
            handleChange={handlePaymentType}
          />
          <InputGroupRadio
            id="cashOnDelivery"
            name="Contra reembolso"
            paymentType={paymentType}
            handleChange={handlePaymentType}
          />

          {/* legal terms */}
          <InputGroupCheck
            legalTerms={legalTerms}
            handleChange={handleLegalTerms}
          />
        </div>
        <Preview
          name={name}
          email={email}
          region={region}
          paymentType={paymentType}
          legalTerms={legalTerms}
        />
        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <Button
          handleButton={handleForm}
          title="Enviar"
          disabled={isValidForm() === false}
        />
        {/* send */}
        <Button
          handleButton={handleResetButton}
          title="Limpiar el formulario"
          class="reset"
        />
      </form>
    </div>
  );
};

export default App;
