import { useState } from "react";
import Form from "react-bootstrap/Form";
import countries from "../../helper/data";
import { Container, Row, Col, Card } from "react-bootstrap";

console.log(countries);

const CountryCard = ({country}) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <Col>
      <Card onClick={() => setShow(!show)}>
        {!show ? (
          <Card.Img variant="top" src={country.flag} />
        ) : (
          <>
            <Card.Header>
              <Card.Title>{country.name}</Card.Title>
              <ul className="m-auto">
                {country.languages.map((language) => (
                  <li className="list-unstyled">{language}</li>
                ))}
              </ul>
              <p>Capital: {country.capital}</p>
              <p>Region: {country.region}</p>
              <p>Population: {country.population}</p>
              <p>Area: {country.area}</p>
            </Card.Header>
          </>
        )}
      </Card>
    </Col>
  );
};

export default CountryCard;
