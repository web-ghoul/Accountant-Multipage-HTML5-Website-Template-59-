//Input
let theInputIconS=document.querySelector('.the-input i.fa-search');
let theInputSearch=document.querySelector('.the-input input')
theInputIconS.addEventListener('click',function(){
    if( theInputSearch.style.opacity=='1'){
        theInputSearch.style.opacity='0';
        theInputSearch.style.zIndex='-1';
        theInputIconS.classList.add('right');
        theInputIconS.classList.remove('left');
        theInputIconS.classList.remove('fa-times');
        theInputIconS.classList.add('fa-search');
    }
    else{
        theInputSearch.style.opacity='1';
        theInputSearch.style.zIndex='99';
        theInputIconS.classList.add('left');  
        theInputIconS.classList.remove('right');
        theInputIconS.classList.add('fa-times');
        theInputIconS.classList.remove('fa-search')
    }
})

//Data Hide / Show
let data =document.querySelector(".main .container .data .contain");
let point=document.querySelector('.main .container .header .contain .points');
point.addEventListener('click',function(){
    if(data.style.display=='grid'){
        data.style.display='none';
    }
    else{
        data.style.display='grid';
        data.style.zIndex='5555';
    }
})

//Scroll Header
let header=document.querySelector('.main .container .header');
//Scrolling Page
let scrollButton=document.querySelector('.scroll a button');
window.onscroll=function(){
    if(window.scrollY > 0){
        header.style.position='fixed';
        header.style.top='0';
        scrollButton.style.opacity='1';
    }
    else{
        header.style.position='relative';
        scrollButton.style.opacity='0';
    }
}

//Header Tools
let theInput = document.querySelector('.header .contain .the-input');
let theTool = document.querySelector('.header .contain .tools');
let theMenu = document.querySelector('.header .contain .menu i');
theMenu.addEventListener('click',function(){
    if( theTool.style.display=='grid' &&  theInput.style.display=='flex'){
        theTool.style.display='none';
        theInput.style.display='none'
    }
    else{
        theTool.style.display='grid';
        theInput.style.display='flex';
    }
})
//tools
let tools = Array.from(document.querySelectorAll('.header .contain .tools .tool a'));
tools.forEach((tool)=>{
    tool.addEventListener('click',function(){
        tools.forEach((t)=>{
            t.classList.remove('active');
        })
        tool.classList.add('active')
    })
})

//Slider
let slider=Array.from(document.querySelectorAll(".title .contain .slider span"));
let title=document.querySelector('.main .container .title');
let normalText=document.querySelector('.title .contain .content .normal');
let fontText=document.querySelector('.title .contain .content .font');
let normal=['Be Sure You Are','Your Personal','Do You Need'];
let font=['On The Right Way','Online Accountant','an Accountant?'];
let imgs=['xps-dpbXgTh0Lac-unsplash.jpg','windows-JqmOD1jpHHw-unsplash.jpg','microsoft-edge-TcC5qr3dpgA-unsplash.jpg']
let i=0;
let count=setInterval(function(){
    if(i==3){
        i=0;
    }
    title.style.backgroundImage=`url('../Images/${imgs[i]}')`;
    normalText.textContent=`${normal[i]}`;
    fontText.textContent=`${font[i]}`;
    slider.forEach((s)=>{
        s.classList.remove("select");
    })
    slider[i].classList.add('select')
    i++
},5000)

slider.forEach((slide)=>{
    slide.addEventListener('click',function(){
        clearInterval(count)
        slider.forEach((s)=>{
            s.classList.remove("select");
        })
        slide.classList.add("select");
        title.style.backgroundImage=`url('../Images/${imgs[slider.indexOf(slide)]}')`;
        normalText.textContent=`${normal[slider.indexOf(slide)]}`;
        fontText.textContent=`${font[slider.indexOf(slide)]}`;
    })
})

//Contact
let labels = Array.from(document.querySelectorAll('.contact .contain form label'));
let inputs = Array.from(document.querySelectorAll('.contact .contain form input'));
let text = document.querySelectorAll('.contact .contain form textarea');
let span = document.createElement("span");
span.textContent='The text field is required.';
span.style.fontSize='12px';
span.style.color='red';
span.style.display='none';
labels.forEach((l)=>{
    l.appendChild(span);
})

inputs.forEach((i)=>{
    i.onblur = function(){
        if(i.value==''){
            labels[inputs.indexOf(i)].appendChild(span);
            span.style.display='flex';
        }
        else{
            span.style.display='none';
        }
    }
})

