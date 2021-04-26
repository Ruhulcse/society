import React ,{useContext}from 'react'
import {LanguageContext} from "../context/language"
import char from "../assets/img/char.png";
function About() {

    const{english} = useContext(LanguageContext);

    const content = english?{
        name: "About us",
        description: "ASociety group provides a great service in term of Planning, building, testing, publishing, and maintaining your Mobile and Web Application. We believe that the success of our customers is also ours and aspire to always be the best business partners anyone can find. Our team is highly skilled where they have an accomplished many project with different business projects requirements. We have built a various of projects such as e-commerce, delivery application, news application, appointment booking systems, bag booking system, Job’s finder and much more.",
        buttontext: "Learn More"
    }:{
        name: "معلومات عنا",
        buttontext: "يتعلم أكثر",
        description: " خدمة رائعة من حيث التخطيط والبناء والاختبار والنشر وصيانة تطبيقات الهاتف المحمول والويب. نحن نؤمن بأن نجاح عملائنا هو نجاحنا أيضًا ونطمح لأن نكون دائمًا أفضل شركاء الأعمال الذين يمكن لأي شخص العثور عليهم. يتمتع فريقنا بمهارات عالية حيث يكون لديهم العديد من المشاريع المنجزة بمتطلبات مشاريع أعمال مختلفة. لقد قمنا ببناء مجموعة متنوعة من المشاريع مثل التجارة الإلكترونية ، وتطبيق التسليم ، وتطبيق الأخبار ، وأنظمة حجز المواعيد ، ونظام حجز الحقائب ، والبحث عن الوظائف ، وأكثر من ذلك بكث"
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-xs-6 sol-sm-6 col-lg-6">
                    <div className="about">
                        <h1>{content.name}</h1>
                        <p className="abouttext">{content.description}</p>
                        <br></br>
                        <br></br>
                        <button className="bt">{content.buttontext}</button>
                    </div>
                </div>
                <div className="col-md-6 col-md-6 col-xs-6 sol-sm-6 col-lg-6">
                    <img src={char}  className="img-fluid" alt="not found"/>
                </div>
            </div>
        </div>
    )
}

export default About
