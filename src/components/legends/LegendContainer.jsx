import Form from "react-bootstrap/Form";
import countries from "../../helper/data";
import { Container, Row } from "react-bootstrap";
import { useState} from "react";
import CountryCard from "./CountryCard";
import { v4 as uuidv4 } from 'uuid';


const LegendContainer = () => {
    const [search, setSearch] = useState("");
  //  console.log(countries)
  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log(search)
  }
console.log(search)

const countriesWithIds = countries.map(country => ({
  id: uuidv4(),
  ...country
}));

 const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(search.trim().toLowerCase() ));  

  return (
    <div>
      <Form.Control type="search" placeholder="Search country.." onChange={handleChange} />
      <Container>
        <Row xs={1} md={2} lg={3}>
          {filteredCountries.map((country) => (
            <CountryCard key={country.id} country={country}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
