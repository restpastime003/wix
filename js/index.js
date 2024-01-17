

var about_me_block = document.getElementsByClassName('about_me_block')[0];
var resume_block = document.getElementsByClassName('resume_block')[0];
var project_block = document.getElementsByClassName('project_block')[0];
var contact_block = document.getElementsByClassName('contact_block')[0];
var header_nav = document.getElementsByClassName('header_nav')[0];


/* 預設區塊 */ 
resume_block.style = "display: none;"
project_block.style = "display: none;"
contact_block.style = "display: none;"

for(i=0; i<4; i++){

    var header_nav_a = header_nav.getElementsByTagName('a')[i];
    header_nav_a.addEventListener('click',function(){
        // console.log(this.innerHTML);
        switch(this.innerHTML){
            case 'ABOUT ME': 
            about_me_block.style = "display: flex;"
            resume_block.style = "display: none;"
            project_block.style = "display: none;"
            contact_block.style = "display: none;"
            break;
            case 'RESUME': 
            about_me_block.style = "display: none;"
            resume_block.style = "display: block;"
            project_block.style = "display: none;"
            contact_block.style = "display: none;"
            break;
            case 'PROJECTS': 
            about_me_block.style = "display: none;"
            resume_block.style = "display: none;"
            project_block.style = "display: block;"
            contact_block.style = "display: none;"
            break;
            case 'CONTACT': 
            about_me_block.style = "display: none;"
            resume_block.style = "display: none;"
            project_block.style = "display: none;"
            contact_block.style = "display: block;"
            break;
        }
    });
}





