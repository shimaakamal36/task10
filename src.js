function Artist(fname,lname,img,id,age){
    this.fname=fname;
    this.lname=lname;
    this.image=img;
    this.id=id;
    this.age=age;
}
let jose=new Artist('jospeh','morgen','images/jose.jpg',100,36);
let sia=new Artist('sia','jack','images/sia.jpg',200,25);
let ge=new Artist('gigi','hadeed','images/ge.jpg',300,20);
let tom=new Artist('tom','cruise','images/th.jpg',500,25);
let sara=new Artist('sara','adel','images/sia.jpg',400,18);
let jack=new Artist('jack','fayez','images/th.jpg',600,16);
let artists=new Array(jose,sia,ge,tom,sara,jack);
let name=prompt("Please Enter Your Name: ").toLowerCase();

function findartist(obj){
    if(obj.fname == name){
        return obj;
    }
}


let art=artists.filter(findartist);
if(art.length != 0){
    document.write('<img src=' + art[0].image +' alt="artis">' );
    document.write('<h1>' + art[0].fname+" " + art[0].lname+"</h1>");
    document.write('<p>YOUR ID is :' + art[0].id+"</p>");
    document.write('<p>YOUR AGE is :' + art[0].age+" years old</p>");
}

else{
     alert("Your Artist is Not Exist in our database");
}






