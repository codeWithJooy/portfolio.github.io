$("#about").on("click",function(){
  $(".header_unit").removeClass("header_active")
  $(this).addClass("header_active")
  $(".about").css("display","block")
  $(".skills").css("display","none")
  $(".projects").css("display","none")
  $(".blog").css("display","none")
})
$("#skill").on("click",function(){
  $(".header_unit").removeClass("header_active")
  $(this).addClass("header_active")
  $(".projects").css("display","none")
  $(".skills").css("display","block")
  $(".about").css("display","none")
  $(".blog").css("display","none")
  
})
$("#projects").on("click",function(){
  $(".header_unit").removeClass("header_active")
  $(this).addClass("header_active")
  $(".projects").css("display","block")
  $(".about").css("display","none")
  $(".skills").css("display","none")
  $(".blog").css("display","none")
  
})
$("#blog").on("click",function(){
  $(".header_unit").removeClass("header_active")
  $(this).addClass("header_active")
  $(".projects").css("display","none")
  $(".about").css("display","none")
  $(".skills").css("display","none")
  $(".blog").css("display","block")
  
})
$("#github").on("click",function(){
  //window.open("https://github.com/codeWithJooy",_blank);
  window.open("https://github.com/codeWithJooy"); 
})

let screen_type="m"
$(".header_toggle").on("click",function(){
    if(screen_type==='m'){
      screen_type="n";
      $(".main").css("background","black");
      $(this).children().attr("src","docs/img/sun.png")
      $(".header_unit").css("color","white")
      $(".header_unit").css("border-bottom","4px solid black");
      $(".about_name").css("color","white");
      $(".about_para").css("color","white");
      $(".header_hamburger").children().attr("src","docs/img/hamburger.png")

      $(".project_unit").css("box-shadow","0 0 10px #43d6b5")
      $(".project_title").css("color","white");
      $(".projects_selector").css("background-color","#003933")
      $(".projects_selector").css("color","#89ffdd") 
      $(".project_active").css("color","89ffdd");

      $(".skills_section_title").css("color","white");
      $(".skills_unit").css("color","white");
      $(".skills_unit").css("border","1px solid white");
    }
    else if(screen_type==='n'){
     screen_type="m"; 
     $(".main").css("background","white");
     $(this).children().attr("src","docs/img/moon.png")
     $(".header_unit").css("color","black")
     $(".header_unit").css("border-bottom","4px solid white")
     $(".about_name").css("color","black");
     $(".about_para").css("color","black");
     $(".header_hamburger").children().attr("src","docs/img/hamburger_black.png")
    
     $(".project_unit").css("box-shadow","0 0 10px grey")
     $(".project_title").css("color","black");
     $(".projects_selector").css("background-color","#a8ffe6")
      $(".projects_selector").css("color","#212529") 

     $(".skills_section_title").css("color","black");
     $(".skills_unit").css("color","black");
     $(".skills_unit").css("border","1px solid black");
    }
})

let project="c";
$(".project_type").on("click",function(){
  $(".project_type").removeClass("project_active")
  $(this).addClass("project_active")
    
  if(project==="c"){
      project='p';
      $("#client_project").css("display","none");
      $("#personal_project").css("display","flex");   
    }
  else if(project==="p"){
      project='c';
      $("#client_project").css("display","flex");
      $("#personal_project").css("display","none");   
    }  
})
