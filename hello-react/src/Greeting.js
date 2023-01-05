
function Greeting(props) {
  return (
    <div>
        <ul>
            {props.greetings.map((greeting) => (
                <li key={greeting.id}>{greeting.name}</li>
            ))}
        </ul>

    </div>
  );
}

export default Greeting;