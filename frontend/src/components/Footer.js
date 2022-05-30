import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

function footer() {
  return (
    <div>
        <footer>
          <Container>
            <Row>
              <Col className='text-center'>
              Copyright &copy; IndyClassics
              </Col>
            </Row>
          </Container>
          </footer>
    </div>
  )
}

export default footer