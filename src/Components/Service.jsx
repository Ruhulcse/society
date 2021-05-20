import React,{useContext} from 'react'
import {LanguageContext} from "../context/language"
import web from "../assets/img/icon.png";
import apps from "../assets/img/icon-2.png";
import hosting from "../assets/img/Group 283.png";
import ux from "../assets/img/icon-1.png";
import seo from "../assets/img/icon-3.png"; 
import graphics from "../assets/img/Op component 1.png";

function Service() {
   
   const{english} = useContext(LanguageContext);

   const brand = english?{
      title: "Our Services",
      description: "We are the best on the market & we can prove with more than just words,",
      check : "check our projects below"
   }:{
      title: "خدماتنا",
      description: "نحن الأفضل في السوق ويمكننا إثبات ذلك بأكثر من مجرد كلمات ،",
      check: "تحقق من مشاريعنا أدناه"
   }

   const service = english?[
      {
         image: web,
         title: "Web Development",
         description: "A decade of design experience has sharpened our team’s competence in building cutting-edge UI and UX, and we make sure to adhere to the most up-to-date industry standards, workflows, and guidelines. This means that you’ll get the product you need, exactly how you need it and when you need it"
      },
      {
         image: apps,
         title: "Apps Development",
         description: "Our mobile apps are designed to perform at all costs. Our team takes pride in designing mobile applications that your customers will find secure, functional, and easy to uses."
      },
      {
         image: hosting,
         title: "Web Hosting",
         description: "Digitally transforming your business gives you access to new revenue streams, cost-saving opportunities, and the freedom to do more with less."
      },
      {
         image: ux,
         title: "UX Design",
         description: "A decade of design experience has sharpened our team’s competence in building cutting-edge UI and UX, and we make sure to adhere to the most up-to-date industry standards, workflows, and guidelines. This means that you will get the product you need, exactly how you need it and when you need it."
      },
      {
         image: seo,
         title: "SEO Optimize",
         description: "We can increase the number of users to your sites and make more engagement to your website. Through this process, the quality and quantity of your site traffic will be improved."
      },
      {
         image: graphics,
         title: "Video Production",
         description: "Impress people and get your message across in style with videos. We will work closely with you to make sure the videos work for your needs and reach a broad audience, at a surprisingly affordable price."
      }
   ]:[
      {
         image: web,
         title: "تطوير الشبكة",
         description: "لقد أدى عقد من الخبرة في التصميم إلى زيادة كفاءة فريقنا في بناء واجهة مستخدم متطورة وتجربة مستخدم ، ونحن نتأكد من الالتزام بأحدث معايير الصناعة ومهام سير العمل والإرشادات. هذا يعني أنك ستحصل على المنتج الذي تحتاجه ، بالطريقة التي تحتاجها بالضبط ومتى "
      },
      {
         image: apps,
         title: "تطوير الشبكة",
         description: "تم تصميم تطبيقات الهاتف المحمول لدينا للعمل بأي ثمن. يفخر فريقنا بتصميم تطبيقات الهاتف المحمول التي سيجدها عملاؤك آمنة وعملية وسهلة الاستخدام.         "
      },
      {
         image: hosting,
         title: "استضافة موقع",
         description: "يتيح لك تحويل عملك رقميًا الوصول إلى مصادر جديدة للإيرادات وفرص توفير التكاليف وحرية القيام بالمزيد بموارد أقل"
      },
      {
         image: ux,
         title: "تصميم",
         description: "لقد أدى عقد من الخبرة في التصميم إلى زيادة كفاءة فريقنا في بناء واجهة مستخدم متطورة وتجربة مستخدم ، ونحن نتأكد من الالتزام بأحدث معايير الصناعة ومهام سير العمل والإرشادات. هذا يعني أنك ستحصل على المنتج الذي تحتاجه ، بالضبط بالطريقة التي تحتاجها ومتى تحتاجها."
      },
      {
         image: seo,
         title: "تحسين محركات البحث",
         description: "يمكننا زيادة عدد المستخدمين إلى مواقعك وزيادة المشاركة في موقع الويب الخاص بك. من خلال هذه العملية ، سيتم تحسين جودة وكمية حركة المرور على موقعك."
      },
      {
         image: graphics,
         title: "انتاج الفيديو",
         description: "اعجب الناس وانقل رسالتك بأسلوب مع مقاطع الفيديو. سنعمل معك عن كثب للتأكد من أن مقاطع الفيديو تناسب احتياجاتك وتصل إلى جمهور عريض بسعر معقول بشكل مدهش."
      }
   ]
    return (  
        <div className="card sbg" id="service">
        <div className="card-body box">
            <div className="container">
               <div className="d-flex justify-content-center">
                   <h1>{brand.title}</h1>
               </div>
               <div className="d-flex justify-content-center">
                 <p className="text-center m-1 smain">{brand.description}</p>
               </div>
               <div className="d-flex justify-content-center">
                 <p className="text-center smain">{brand.check}</p>
               </div>
               <div className="row pt-5">
                  {service.map((item)=>(
                        <div className="col-sm-6 col-md-4 col-lg-4">
                        <div className="d-flex justify-content-center">
                           <div>
                           <div className="square">
                           <img src={item.image} className="img-fluid" alt="not found"/>
                           </div>
                           </div>
                        </div>
                        <div className="d-flex justify-content-center">
                        <h4 className="pt-4">{item.title}</h4>
                        </div>
                        <div className="d-flex justify-content-center">
                           <p className="text-center m-1 stext">{item.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
        </div>
        </div>
    )
}

export default Service
