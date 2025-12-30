import Card from './component/card'
import User from './component/user'

const App = () => {
  const arrr = [
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      "companyName": "Google",
      "datePosted": "2 days ago",
      "post": "Senior Software Engineer, Cloud",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "pay": "$125/hr",
      "location": "Mountain View, USA"
    },
    {
      "brandLogo": "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      "companyName": "Meta",
      "datePosted": "5 days ago",
      "post": "Product Designer",
      "tag1": "Full-time",
      "tag2": "Mid level",
      "pay": "$45/hr",
      "location": "Menlo Park, USA"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      "companyName": "Apple",
      "datePosted": "1 week ago",
      "post": "iOS Developer",
      "tag1": "Full-time",
      "tag2": "Junior level",
      "pay": "$25/hr",
      "location": "Cupertino, USA"
    },
    {
      "brandLogo": "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      "companyName": "Amazon",
      "datePosted": "3 days ago",
      "post": "Solutions Architect",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "pay": "$105/hr",
      "location": "Seattle, USA"
    },
    {
      "brandLogo": "https://i.pinimg.com/736x/1b/54/ef/1b54efef3720f6ac39647fc420d4a6f9.jpg",
      "companyName": "Netflix",
      "datePosted": "10 days ago",
      "post": "Data Scientist",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "pay": "$69/hr",
      "location": "Los Gatos, USA"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      "companyName": "Microsoft",
      "datePosted": "4 hours ago",
      "post": "Frontend Engineer",
      "tag1": "Part-time",
      "tag2": "Junior level",
      "pay": "$92/hr",
      "location": "Hyderabad, India"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      "companyName": "NVIDIA",
      "datePosted": "3 weeks ago",
      "post": "AI Research Scientist",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "pay": "$19/hr",
      "location": "Santa Clara, USA"
    },
    {
      "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      "companyName": "Tesla",
      "datePosted": "1 day ago",
      "post": "Autopilot Engineer",
      "tag1": "Full-time",
      "tag2": "Mid level",
      "pay": "$26/hr",
      "location": "Austin, USA"
    },
    {
      "brandLogo": "data:image/png;base64,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",
      "companyName": "Adobe",
      "datePosted": "6 days ago",
      "post": "UX Researcher",
      "tag1": "Part-time",
      "tag2": "Junior level",
      "pay": "$9/hr",
      "location": "Bangalore, India"
    },
    {
      "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
      "companyName": "Uber",
      "datePosted": "2 weeks ago",
      "post": "Backend Engineer",
      "tag1": "Full-time",
      "tag2": "Mid level",
      "pay": "$50/hr",
      "location": "San Francisco, USA"
    }
  ];
  return (
    <div className='parent'>
      {arrr.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} dateposted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandlogo={elem.brandLogo} />

        </div>
      })}

      {/* {arrr.map(function(elem){
      return <h1>{elem.pay}</h1>
    })} */}

      {/* <User name="hmnsh" />
      <User name="ansh yadav" />
      <User name="harsh mishra" />
      <User name={arr[0]}/>
      {arr.map(function(elem){
        return <h1>{elem*2}</h1>
      })} */}



    </div>
  )
}

export default App
