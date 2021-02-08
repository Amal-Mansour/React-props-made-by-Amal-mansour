import './App.css';
import Navbar from './profile/Navbar';
import MyInfo from './profile/MyInfo';


import CssPrfile from './assets/cssprofile.jpg'
import DocPlanner from './assets/docplanner.jpg'
import Travel from './assets/Travel.jpg'


function App() {
  const handleName = (_fullName) => alert('${fullName}^_^ ')

  const Projects = [
    {
      srcImage: CssPrfile,
      name: "My Portfelio",
      describtion: "my portfolio describe my job, contact and skills and all about a web developer",

    },
    {
      srcImage: DocPlanner,
      name: " A Docplanner",
      describtion: " A Docplanner is web site where we find conacts of hospital",

    },
    {
      srcImage: Travel,
      name: "A Travel agency Contact",
      describtion: " A  Travel agency Contact page allow by a Tiket",
    }
  ]
  return (
    <div className="App">

      <Navbar />

      <MyInfo
        fullName="Amal Mansour"
        profession=" Full Stack Web Developer"
        bio="I 'm a student in GoMyCode since 2 month."
        salary={3920}
        skills={["html", "--", "css", "--", "js", "--", "jsx"]}
        handleName={handleName}
        Projects={Projects}

      >

      </MyInfo>

    </div>

  );
}

export default App;
