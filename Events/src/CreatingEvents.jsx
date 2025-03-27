function CreatingEvents () {
    const greeting = (props) => {
        let text = "Hello";
        let add = props
        let result = text.concat(" ", add);
        alert(result);
      }
    
      return (
        <><button type="button" onClick={() => greeting("User")}>Click</button></>
      )
}

export default CreatingEvents