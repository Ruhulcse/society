import React from 'react'

function Work() {
    return (
        <div className="container-fluid" style={{marginBottom:"8%"}}>
            <div className="row pt-3"></div>
            <div className="d-flex justify-content-center pt-5">
                <h1>How We Work</h1>
            </div>
            <div className="d-flex justify-content-center">
               <p>simple process at which you can make your ideas possible with 3 easy steps</p>
            </div>
            <div className="row pb-5 pt-5">
                <div className="col-md-4 " style={{paddingLeft:"5%",paddingTop:"4%"}}>
                 <div className="">
                   <p>
                    <a class="btn abtn" data-toggle="collapse" href="#oneExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        1
                    </a>
                    <span className="sp"> Sent Your Idea</span>
                    </p>
                    <div class="collapse" id="oneExample">
                    <div class="card card-body">
                       once we recive your idea proposal,our team will start developing your based on the client desire
                    </div>
                    </div>
                 </div>
                 <div className="">
                   <p>
                     <a class="btn abtn" data-toggle="collapse" href="#twoExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        2
                    </a>
                   <span className="sp"> Monitor</span>
                    </p>
                    <div class="collapse" id="twoExample">
                    <div class="card card-body">
                       once we recive your idea proposal,our team will start developing your based on the client desire
                    </div>
                    </div>
                 </div>
                 <div className="">
                   <p>
                    <a class="btn abtn" data-toggle="collapse" href="#threeExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        3
                    </a>
                    <span className="sp">Complete</span>
                    </p>
                    <div class="collapse" id="threeExample">
                    <div class="card card-body">
                       once we recive your idea proposal,our team will start developing your based on the client desire
                    </div>
                    </div>
                 </div>
                </div>
                <div className="col-md-8 pl-5" style={{paddingRight:"8%"}}>
                    <div className="video_box">
                    <div class="videoWrapper">
                      <iframe width="560" height="349" src="https://www.youtube.com/embed/6tkaatkbC2Y" frameborder="0" allowfullscreen></iframe>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
