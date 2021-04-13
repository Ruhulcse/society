import "./Proposal.css";
import profile from "../../assets/person.jpeg";
const Prop = () => {
  const Propsal = [
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
    {
      title: "Attendance System",
      name: "Luai Ahmed Haider",
      profile: profile,
      email: "Laui200@gmail.com",
      mobile: "+6012913317",
      type: "Mobile proposal",
    },
  ];
  return (
    <main>
      <div className="main__container">
        <div className="row">
          {Propsal.map((item) => (
            <div className="col-md-4 pl-4  mt-5 pr-5">
              <div className="card">
                <div className="card-header hbg mb-2">
                  <h3 className="title">Attendence System</h3>
                </div>
                <div className="card-body">
                  <div className="row pl-2">
                    <div className="col-md-8">
                      <h5 className="card-title headtex">Luai Ahmed Haider</h5>
                      <p className="gray pt-2 mb-2">Luai200@gmail.com</p>
                      <p className="gray mb-2">+6018-2321-785</p>
                      <p className="gray mb-2">Mobile Proposel</p>
                    </div>
                    <div className="col-md-4 ">
                      <div>
                        <img
                          className="img-fluid rounded-circle "
                          style={{ height: "70px", width: "70px" }}
                          src={profile}
                          alt="not found"
                        />
                      </div>
                      <div className="pt-5">
                        <a href="#" className="btn cardborder">
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Prop;
