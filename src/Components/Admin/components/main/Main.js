import "./Main.css";
import profile from "../../assets/profile.png"
const Main = () => {
  const Users = [
    {
    name: "Luai Ahmed",
    profile: profile,
    profession: "Web developer",
    mobile: "+6012913317"
   },
   {
    name: "Abdulmalek",
    profile: profile,
    profession: "Mobile developer",
    mobile: "+6012913317"
   },
   {
    name: "Abdulsalem",
    profile: profile,
    profession: "Mobile developer",
    mobile: "+6012913317"
   },
   {
    name: "Ahmed",
    profile: profile,
    profession: "Mobile developer",
    mobile: "+6012913317"
   },
   {
    name: "Mohammed",
    profile: profile,
    profession: "Mobile developer",
    mobile: "+6012913317"
   },
   {
    name: "Saleh",
    profile: profile,
    profession: "Mobile developer",
    mobile: "+6012913317"
   },
   {
    name: "Ameer",
    profile: profile,
    profession: "Mobile developer",
    mobile: "+6012913317"
   },
   {
    name: "aslan",
    profile: profile,
    profession: "Mobile developer",
    mobile: "+6012913317"
   }

]
  return (
    <main>
      <div className="main__container">
            <div className="row">
                {Users.map((item)=>(
                    <div className="col-md-6">
                    <div class="card mt-5">
                        <div class="card-body">
                            <div className="row">
                            <div className="col-md-2">
                                <img className="img-fluid rounded-circle" src={item.profile} alt="not found"/>
                            </div>
                            <div className="col-md-6">
                                <h5>{item.name}</h5>
                                <p style={{color: "gray"}}>{item.profession}</p>
                                <p style={{color: "gray"}}>Mobile: {item.mobile}</p>
                            </div>
                            <div className="col-md-4">
                                <div className="row float-right">
                                <button className="btn"><i class="fas fa-pen"></i></button>
                                <button className="btn"><i class="fas fa-times"></i></button>
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

export default Main;
