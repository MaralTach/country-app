import { useState } from "react";
// import Form from "react-bootstrap/Form";
import countries from "../../helper/data";
import { Col, Card } from "react-bootstrap";

console.log(countries);

const CountryCard = ({ country }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <Col>
      <Card className="flag-card m-1" onClick={() => setShow(!show)}>
        <Card.Title className="title2">{country.name}</Card.Title>
        {!show ? (
          <>
            <Card.Img variant="top" src={country.flag}  />
          </>
        ) : (
          <>
            <Card.Header className="text">
              {/* <ul className=" ">
                {country.languages.map((language) => (
                  <li className="list-unstyled">Language: {language }</li>
                ))}
              </ul> */}
              <p><span className="item">Language: </span> {country.languages}</p>
              <p><span className="item">Capital: </span> {country.capital}</p>
              <p><span className="item">Region:</span> {country.region}</p>
              <p> <span className="item">Population:</span>  {country.population}</p>
              <p><span className="item">Area:  </span> {country.area}</p>
            </Card.Header>
          </>
        )}
      </Card>
    </Col>
  );
};

export default CountryCard;
