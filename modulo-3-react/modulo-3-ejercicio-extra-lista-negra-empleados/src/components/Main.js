import "../styles/Main.scss";
import Form from "./Form";
import Table from "./Table";

const Main = (props) => {
  return (
    <main className="main">
      <Form updateSearch={props.updateSearch} searchValue={props.searchValue} />
      <Table data={props.data} searchValue={props.searchValue} />
    </main>
  );
};

export default Main;
