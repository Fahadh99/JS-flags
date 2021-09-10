const country1=document.createElement("div");
country1.setAttribute("class","card ab-4");

const flag1=document.createElement("img");
flag1.src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png";
flag1.setAttribute("class","card-img-top");
flag1.alt="Germany Flag";
country1.append(flag1);

const content1=document.createElement("div");
content1.setAttribute("class","card-body");

const heading1=document.createElement("h5");
heading1.innerText="Germany";
content1.append(heading1);

const details1=document.createElement("p");
details1.setAttribute("class", "card-text");
details1.innerHTML = '<strong>Population </strong>81770900 <br /><strong>Region: </strong>Europe <br /><strong>Capital: </strong>Berlin';
content1.append(details1);

country1.append(content1);

const country2=document.createElement("div");
country2.setAttribute("class","card ab-4");

const flag2=document.createElement("img");
flag2.src="https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png";
flag2.setAttribute("class","card-img-top");
flag2.alt="India Flag";
country2.append(flag2);

const content2=document.createElement("div");
content2.setAttribute("class","card-body");

const heading2=document.createElement("h5");
heading2.innerText="India";
content2.append(heading2);

const details2=document.createElement("p");
details2.setAttribute("class", "card-text");
details2.innerHTML = '<strong>Population </strong>1,380,004,385 <br /><strong>Region: </strong>Asia <br /><strong>Capital: </strong>New Delhi';
content2.append(details2);

country2.append(content2);

const country3=document.createElement("div");
country3.setAttribute("class","card ab-4");

const flag3=document.createElement("img");
flag3.src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png";
flag3.setAttribute("class","card-img-top");
flag3.alt="USA Flag";
country3.append(flag3);

const content3=document.createElement("div");
content3.setAttribute("class","card-body");

const heading3=document.createElement("h5");
heading3.innerText="USA";
content3.append(heading3);

const details3=document.createElement("p");
details3.setAttribute("class", "card-text");
details3.innerHTML = '<strong>Population </strong>331,449,281 <br /><strong>Region: </strong>Americas <br /><strong>Capital: </strong>Washington D.C';
content3.append(details3);

country3.append(content3);

const country4=document.createElement("div");
country4.setAttribute("class","card ab-4");

const flag4=document.createElement("img");
flag4.src="https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png";
flag4.setAttribute("class","card-img-top");
flag4.alt="Brazil Flag";
country4.append(flag4);

const content4=document.createElement("div");
content4.setAttribute("class","card-body");

const heading4=document.createElement("h5");
heading4.innerText="Brazil";
content4.append(heading4);

const details4=document.createElement("p");
details4.setAttribute("class", "card-text");
details4.innerHTML = '<strong>Population </strong>214,347,125 <br /><strong>Region: </strong>Americas <br /><strong>Capital: </strong>Brasilia';
content4.append(details4);

country4.append(content4);