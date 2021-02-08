import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
/********import images*********/
import myImage from '../assets/best.jpg'
import TheChildren from './TheChildren'
import Project from './Project'





function MyInfo({ fullName, profession, bio, skills, salary, handleName, Projects }) {

    const infoStyle = {

        fontFamily: 'sans-serif',
        fontSize: '20px',
        width: "160px",
        height: "400px",
        color: "white",
        backgroundColor: '#333333',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }


    const BtnStyle = {
        padding: "15px 50px",
        backgroundColor: "black",
        borderRadius: "8px",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center'
    }


    return (
        <div>



            {/*the difrents props impotet from the parnet */}
            <div style={infoStyle}>
                <img src={myImage} alt="girl" style={{ width: '160px', height: '150px', margin: "0", padding: "0" }} />
                <h4>{fullName}</h4>
                <hr style={{ border: "2px solid", color: "white" }} />
                <p>{profession}</p>
                <hr />
                <p>{bio}</p>
                <hr />
                <p>My skills :<br />{skills}</p>
                <hr />
                <h5>Salary of  a fullstack web developper :<br />{salary}  TND</h5>

            </div>
            <div>
                {<Button onClick={() => handleName(fullName)} style={BtnStyle}>
                    Click Me</Button>}
                <br />
                <br />
            </div>


            <br />
            <br />

            {/* create the card for my previous project */}
            <h4 style={{ textAlign: "center", color: "red" }}>My Project</h4>
            <span className="myCard">

                {Projects.map((project, i) => (
                    <Project project={project} key={i} />
                ))}
            </span>

            <br />
            <br />
            {/* create a children for myInfo funcion  */}


            <TheChildren />

        </div>

    )
}

export default MyInfo;

/********** Prototype********/


MyInfo.propTypes = {

    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string,
    bio: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    salary: PropTypes.number,
    handleName: PropTypes.func,

}


/*********Default Proptype *************/

MyInfo.defaultProps = {
    fullName: "unkown",
    bio: "no bio",
}