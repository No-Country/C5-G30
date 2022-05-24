import ListButton from "./ListButton";

export default (props) => {
  return (
    <div id="list-item-background-001">
      <div id="list-item-msg-001">{props.msg}</div>
      <ListButton val="1" msg={props.btn1} />
      <ListButton val="1" msg={props.btn2} />
    </div>
  );
};
