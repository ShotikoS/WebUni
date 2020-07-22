var navbar__content = [
    {
        Text: "Home",
        Link: "index.html"
    },
    {
        Text: "About Us",
        Link: "AboutUs.html"
    },
    {
        Text: "Courses",
        Link: "Courses.html"
    },
    {
        Text: "News",
        Link: "News.html"
    },
    {
        Text: "Contact",
        Link: "Contact.html"
    }
];

var CourseCategoriesList = [
    {
        ImgUrl: "image/webDesigner.jpg",
        CourseTitle: "Web Designer",
        CourseDescribe: "Lorem ipsum dolor sit amet, consectetur",
        CourseQuantity: "70 Course",
        Alt: "webDesign_course",
        Href: "#"
    },
    {
        ImgUrl: "image/social_media.jpg",
        CourseTitle: "Social Media",
        CourseDescribe: "Lorem ipsum dolor sit amet, consectetur",
        CourseQuantity: "40 Course",
        Alt: "SocialMedia_course",
        Href: "#"
    },
    {
        ImgUrl: "image/PhotoShop.jpg",
        CourseTitle: "Photoshop",
        CourseDescribe: "Lorem ipsum dolor sit amet, consectetur",
        CourseQuantity: "220 Course",
        Alt: "Photoshop_course",
        Href: "#"
    },
    {
        ImgUrl: "image/Illustration.jpg",
        CourseTitle: "Illustration & Drawing",
        CourseDescribe: "Lorem ipsum dolor sit amet, consectetur",
        CourseQuantity: "55 Course",
        Alt: "Illustration_course",
        Href: "#"
    },
    {
        ImgUrl: "image/IT_Development.jpg",
        CourseTitle: "IT Development",
        CourseDescribe: "Lorem ipsum dolor sit amet, consectetur",
        CourseQuantity: "120 Course",
        Alt: "IT_Development_course",
        Href: "#"
    },
    {
        ImgUrl: "image/crypto.jpeg",
        CourseTitle: "Cryptocurrencies",
        CourseDescribe: "Lorem ipsum dolor sit amet, consectetur",
        CourseQuantity: "25 Course",
        Alt: "Cryptocurrencies_course",
        Href: "#"
    },
];

var CourseCat = [
    {
        Text: "All",
        Link: "#"
    },
    {
        Text: "Finance",
        Link: "#"
    },
    {
        Text: "Design",
        Link: "#"
    },
    {
        Text: "Web development",
        Link: "#"
    },
    {
        Text: "Photography",
        Link: "#"
    },
]

var featureList = [
    {
        ImgSrc: "image/ArcANdCraft.jpg",
        ImgAlt: "Feature__ArtANdCraft",
        FeaturePrice: "Price 15$",
        FeatureTitle: "Art & Crafts",
        FeatureDescribtion: "Lorem ipsum dolor sit amet, consectetur",
        StudentsQuantity: "120 students",
        LectoreImg: "image/Leqtors/LeqtoreOne.jpg",
        LectoreName: "William Smith, ",
        LectoreProfession: "Designer"
    },
    {
        ImgSrc: "image/IT_specialist.png",
        ImgAlt: "IT__Development",
        FeaturePrice: "Price 50$",
        FeatureTitle: "IT Development",
        FeatureDescribtion: "Lorem ipsum dolor sit amet, consectetur",
        StudentsQuantity: "110 students",
        LectoreImg: "image/Leqtors/LeqtoreTwo.jpg",
        LectoreName: "Linda Brown, ",
        LectoreProfession: "IT Specialist"
    },
    {
        ImgSrc: "image/GraphicDesign.jpg",
        ImgAlt: "Feature__ArtANdCraft",
        FeaturePrice: "Price 30$",
        FeatureTitle: "Graphic Design",
        FeatureDescribtion: "Lorem ipsum dolor sit amet, consectetur",
        StudentsQuantity: "96 students",
        LectoreImg: "image/Leqtors/LeqtoreTree.jfif",
        LectoreName: "Betty Wilson, ",
        LectoreProfession: "Designer"
    },
    {
        ImgSrc: "image/csharp_featured.png",
        ImgAlt: "C#",
        FeaturePrice: "Price 75$",
        FeatureTitle: "C#",
        FeatureDescribtion: "Lorem ipsum dolor sit amet, consectetur",
        StudentsQuantity: "123 students",
        LectoreImg: "image/Leqtors/Leqtorefour.jpeg",
        LectoreName: "Rebecca Harris, ",
        LectoreProfession: "Developer"
    },
    {
        ImgSrc: "image/js.jpg",
        ImgAlt: "Javascript",
        FeaturePrice: "Price 80$",
        FeatureTitle: "JavaScript",
        FeatureDescribtion: "Lorem ipsum dolor sit amet, consectetur",
        StudentsQuantity: "67 students",
        LectoreImg: "image/Leqtors/LeqtoreFive.jpg",
        LectoreName: "Daniel Davies, ",
        LectoreProfession: "Developer"
    },
    {
        ImgSrc: "image/markUp.jpg",
        ImgAlt: "MarkUp",
        FeaturePrice: "Price 30$",
        FeatureTitle: "MarkUp",
        FeatureDescribtion: "Lorem ipsum dolor sit amet, consectetur",
        StudentsQuantity: "42 students",
        LectoreImg: "image/Leqtors/LeqtoreSix.jfif",
        LectoreName: "David Edwards, ",
        LectoreProfession: "MarkUper"
    },
    {
        ImgSrc: "image/photoshopFeat.jpg",
        ImgAlt: "PhotoShop",
        FeaturePrice: "Price 55$",
        FeatureTitle: "Photoshop",
        FeatureDescribtion: "Lorem ipsum dolor sit amet, consectetur",
        StudentsQuantity: "33 students",
        LectoreImg: "image/Leqtors/lectoreSeven.jpg",
        LectoreName: "John Robinson, ",
        LectoreProfession: "Designer"
    },
    {
        ImgSrc: "image/IllustrationNdrawing.jpg",
        ImgAlt: "IllustrationAndDrawing",
        FeaturePrice: "Price 45$",
        FeatureTitle: "Illustration & Drawing",
        FeatureDescribtion: "Lorem ipsum dolor sit amet, consectetur",
        StudentsQuantity: "45 students",
        LectoreImg: "image/Leqtors/LeqtoreOne.jpg",
        LectoreName: "Jose Hall, ",
        LectoreProfession: "Designer"
    },
]

//create navbar show hide function on click'

$(document).ready(function(){
    $(".bar").click(function(){
        if($(".navBar").hasClass("active")){
            $(".navBar").removeClass("active");
            $(".navBar").css({
                "transition": "0.5s"
            })
        }
        else{
            $(".navBar").addClass("active");
        }
    })
})

//create function for ul li lisd

function Fill__UlList(arr, ID__Name, activeCLassName){
    for(let i = 0; i < arr.length; i++){
        let create_Li = document.createElement("li");
        let create_a = document.createElement("a");
        create_a.href = arr[i].Link;
        create_a.innerText = arr[i].Text
        document.getElementById(ID__Name).appendChild(create_Li).appendChild(create_a);
        document.getElementById(ID__Name).firstChild.className = activeCLassName;
    }
};

function FillCaourseList(arr, H3_Class, descr_classname, duration_classname){
    for(let i = 0; i < arr.length; i++){
        let create_li = document.createElement("li");
        let create_a = document.createElement("a");
        let create_img = document.createElement("img");
        let create_h3 = document.createElement("h3");
        let createP__describe = document.createElement("p");
        let createP__duration = document.createElement("p");
        createP__describe.className  = descr_classname;
        createP__duration.className = duration_classname;
        create_a.href = arr[i].Href;
        create_img.src = arr[i].ImgUrl;
        create_img.alt = arr[i].Alt;
        create_h3.className = H3_Class;
        create_h3.innerText = arr[i].CourseTitle;
        createP__describe.innerText = arr[i].CourseDescribe;
        createP__duration.innerText = arr[i].CourseQuantity;
        create_a.appendChild(create_img);
        create_a.appendChild(create_h3);
        create_a.appendChild(createP__describe);
        create_a.appendChild(createP__duration);
        document.getElementById("CourseCategories").appendChild(create_li).appendChild(create_a);
    }
}

//create Feature courses list function

function createFeatureCourseLi(arr, ID__Name){
    for(let i = 0; i < arr.length; i++){
        let create_li = document.createElement("li");
        let createFeatureImg = document.createElement("img");
        let FuturePrice = document.createElement("p");
        let FeatureTitle = document.createElement("h3");
        let FeatureDescribtion = document.createElement("p");
        let StudentsQuantity = document.createElement("p");
        let hr = document.createElement("hr");
        let TeacherInFeature = document.createElement("div");
        let TeacherInFeatureImg = document.createElement("img");
        let detailsAboutTeacher = document.createElement("p");
        let LectoreProf = document.createElement("span");
        LectoreProf.className = "profession";
        LectoreProf.innerText = arr[i].LectoreProfession;
        FuturePrice.className = "FeaturePrice";
        FeatureTitle.className = "FeatureTitle";
        FeatureDescribtion.className = "FeatureDescribtion";
        StudentsQuantity.className = "StudentsQuantity";
        hr.className = "hrInFeature";
        TeacherInFeature.className = "TeacherInFeature";
        detailsAboutTeacher.className = "detailsAboutTeacher";
        createFeatureImg.src = arr[i].ImgSrc;
        createFeatureImg.alt = arr[i].ImgAlt;
        FuturePrice.innerText = arr[i].FeaturePrice;
        FeatureTitle.innerText = arr[i].FeatureTitle;
        FeatureDescribtion.innerText = arr[i].FeatureDescribtion;
        StudentsQuantity.innerText = arr[i].StudentsQuantity;
        TeacherInFeatureImg.src = arr[i].LectoreImg;
        detailsAboutTeacher.innerText = arr[i].LectoreName;
        create_li.appendChild(createFeatureImg);
        create_li.appendChild(FuturePrice);
        create_li.appendChild(FeatureTitle);
        create_li.appendChild(FeatureDescribtion)
        create_li.appendChild(StudentsQuantity);
        create_li.appendChild(hr);
        TeacherInFeature.appendChild(TeacherInFeatureImg);
        TeacherInFeature.appendChild(detailsAboutTeacher);
        detailsAboutTeacher.appendChild(LectoreProf);
        create_li.appendChild(TeacherInFeature);
        document.getElementById(ID__Name).appendChild(create_li);
    }
}

Fill__UlList(navbar__content, "navbar");

FillCaourseList(CourseCategoriesList, "CourseName", "describe", "CourseDuration");

Fill__UlList(CourseCat, "CourseCat", "activeLi");

createFeatureCourseLi(featureList, "FeatureCourse");