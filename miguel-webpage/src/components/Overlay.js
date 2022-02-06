import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faFolderOpen } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Overlay = () => {
  return (
    <Fragment>
      <Container>
        <Row >
          <Col>
            <div className="text-center">
                <h1>Profile Picture</h1>
                <h1>Miguel Menjivar</h1>
            </div>
          </Col>
          <Col>
          <div class="text-center">
                <p>Urban TXT: Teens Exploring Technology</p>
                <p>Fullstack Web Developer</p>
                <p>Los Angeles, CA</p>

                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Overlay;
