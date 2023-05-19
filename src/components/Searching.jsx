import React from 'react';
import { Input, InputGroup, Grid, Row, Col } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

const styles = {
  width: 350,
  margin: "20px auto"
};


const CustomInputGroup = ({ placeholder, ...props }) => (
  <InputGroup {...props} style={styles}>
    <Input placeholder={placeholder} style={{backgroundColor: "#010026", color: "yellow"}}/>
    <InputGroup.Addon>
      <SearchIcon />
    </InputGroup.Addon>
  </InputGroup>
);


function Searching() {
  return (
    <Grid fluid>
        <Row>
            <Col xs={24} sm={12} md={8}>
                <CustomInputGroup size="sm" placeholder="Searching..." />
            </Col>
        </Row>
    </Grid>
  )
}

export default Searching