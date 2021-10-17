import { Users } from '../models/users';

const USERDIV = document.getElementById('userDiv');
const BTN1 = document.getElementById('btn1');
const BTN2 = document.getElementById('btn2');

const API_URL = `https://reqres.in/api/users?page=`;

let number = 1;

BTN1.addEventListener('click', () => {
	number = 1;
	getData();
});
BTN2.addEventListener('click', () => {
	number = 2;
	getData();
});

const getData = async () => {
	const res = await fetch(API_URL + number);
	const resFormat = await res.json();
	USERDIV.innerHTML = '';

	for (const a of resFormat.data) {
		let user = new Users(a.avatar, a.first_name, a.last_name, a.email, a.id);
		USERDIV.innerHTML += user.afficher();
	}
};

getData();

//`
// <div class="userCard">
//     <div class="imageWrapper" style="background: center / contain url(${a.avatar})">
//     </div>
//     <div class="text">
//       <h6 class="name">${a.last_name} ${a.first_name}</h6>
//       <span class="email">${a.email}</span>
//     </div>
//   </div>
//`;
