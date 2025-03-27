function AdditionalTextComponent (TextComponent) {
  return function ConstAdditionalTextComponent(props) {
    return (
      <div>
        <p>Hello {props.name}!</p>
        <TextComponent {... props} />
      </div>
    );
  };
}

export default AdditionalTextComponent