

const persons = [
  {

    images: [
      "./images/img-1.jpg",
      "./images/img-2.jpeg",
      "./images/img-3.jpg",
      "./images/img-4.jpg",
      "./images/img-5.webp",
      "./images/img-6.jpg",
      "./images/img-7.jpg",
      "./images/img-8.jpg",
      "./images/img-9.webp",
      "./images/img-10.jpeg",
    ],
  },
  {

    images: [
      "./images/img-11.jpg",
      "./images/img-12.jpg",
      "./images/img-13.jpeg",
      "./images/img-14.webp",
      "./images/img-15.jpg",
      "./images/img-16.jpg",
      "./images/img-17.webp",
      "./images/img-18.jpg",
      "./images/img-19.jpg",
      "./images/img-20.jpg",
    ],
  },
];



const auth = sessionStorage.getItem('auth')
const nombre = sessionStorage.getItem('nombre')
const genero = sessionStorage.getItem('genero')





if (genero === 'femenino') {

    document.getElementById("userName").textContent = nombre;


    document.querySelector(".user-container").classList.add('fem')

    persons[0].images.forEach((img) => {
      console.log(img.images);

      const row = document.getElementById("myRow");

      const div = document.createElement("div");
      div.classList.add("col-md-3");
      row.appendChild(div);

      const myImg = document.createElement("img");
      myImg.setAttribute("src", img);
      myImg.classList.add("img-fluid", "mt-4");

      div.appendChild(myImg);
    });

    
    
}else{


    const myName = document.getElementById("userName").textContent = nombre;

    console.log(myName);


    document.querySelector(".user-container").classList.add("male");

    persons[1].images.forEach( img => {


      const row = document.getElementById('myRow')

      const div = document.createElement('div')
      div.classList.add('col-md-3')
      row.appendChild(div)

      const myImg = document.createElement('img')
      myImg.setAttribute('src', img)
      myImg.classList.add('img-fluid', 'mt-4')

      div.appendChild(myImg)

    })

    


}




