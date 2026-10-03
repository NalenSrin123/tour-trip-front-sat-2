const IncludeMetting = (props) => {
  const pricePerPerson = 150;

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const totalPrice =
    (adults + children) * pricePerPerson;

  return (
    <body></body>