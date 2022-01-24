import InputGroupCheck from "./InputGroupCheck";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupText from "./InputGroupText";
import Preview from "./Preview";
import Button from "./Button";

const Form = (props) => {
  const isValidForm = () => {
    if (
      (props.name !== props.email) !== "" &&
      props.paymentType !== "" &&
      props.legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <h2>Rellena tus datos para finalizar la compra:</h2>
      <div className="form">
        {/* name */}
        <InputGroupText
          labelText="Escribe un nombre:"
          inputName="name"
          inputId="name"
          inputPlaceholder="María García"
          value={props.name}
          handleChange={props.handleName}
        />

        {/* email */}
        <InputGroupText
          labelText="Escribe un email:"
          inputName="name"
          inputId="email"
          inputPlaceholder="mariagarcia@gmail.com"
          value={props.email}
          handleChange={props.handleEmail}
        />

        {/* region */}
        <InputGroupSelect
          value={props.region}
          handleChange={props.handleRegion}
        />
        {/* payment type */}
        <label className="label-text">Indica tu método de pago:</label>
        <InputGroupRadio
          id="creditCard"
          name="Tarjeta de Crédito"
          paymentType={props.paymentType}
          handleChange={props.handlePaymentType}
        />
        <InputGroupRadio
          id="cash"
          name="Efectivo"
          paymentType={props.paymentType}
          handleChange={props.handlePaymentType}
        />
        <InputGroupRadio
          id="cashOnDelivery"
          name="Contra reembolso"
          paymentType={props.paymentType}
          handleChange={props.handlePaymentType}
        />

        {/* legal terms */}
        <InputGroupCheck
          legalTerms={props.legalTerms}
          handleChange={props.handleLegalTerms}
        />
      </div>
      <Preview
        name={props.name}
        email={props.email}
        region={props.region}
        paymentType={props.paymentType}
        legalTerms={props.legalTerms}
      />
      {/* reset */}
      {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
      <Button
        handleButton={props.handleForm}
        title="Enviar"
        disabled={isValidForm() === false}
      />
      {/* send */}
      <Button
        handleButton={props.handleResetButton}
        title="Limpiar el formulario"
        class="reset"
      />
    </>
  );
};
export default Form;
