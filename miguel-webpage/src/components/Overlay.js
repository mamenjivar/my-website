import { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faFolderOpen, faUser } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import "./Overlay.css";
import pfp from '../utils/img/pfp.jpg';

import Biography from "./Biography";

const Overlay = () => {
  const [bio, setBio] = useState(false);

  // toggles the bio
  const onclickBioHandler = () => {
    setBio(!bio);
  }

  return (
    <Fragment>
      <Container>
        <Row >
          <Col>
            <div className="text-center">
                <img id="profile-picture" src={pfp} alt="profile" onClick={onclickBioHandler}/>
                <h1>Miguel Menjivar</h1>
            </div>
          </Col>
          <Col>
          <div className="text-center bordering d-flex flex-column justify-content-around">
          {bio ? <Biography /> : 
            <Fragment>

                <h1 >Urban TXT: Teens Exploring Technology</h1>
                <h1>Fullstack Web Developer</h1>
                <h1 >Los Angeles, CA</h1>
            </Fragment>
          }
                <div className="display-4">
                  <FontAwesomeIcon className="pr-2" icon={faUser}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Overlay;
