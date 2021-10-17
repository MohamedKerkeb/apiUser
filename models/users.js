export class Users {
	constructor(avatar, first_name, last_name, email, id) {
		this.avatar = avatar;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.id = id;
	}

	afficher() {
		return `
			<div class='userCard'>
				<div class='imageWrapper' style='background: center / contain url(${this.avatar})'></div>
					<div class='text'>
						<h6 class='name'>
							${this.last_name} ${this.first_name}
						</h6>
						<span class='email'>${this.email}</span>
					</div>
			</div>
		`;
	}
}

/**
 * <div class='userCard'>
					<div class='imageWrapper' style='background: center / contain url(${avatar})' /></div>
					<div class='text'>
						<h6 class='name'>${last_name} ${first_name}</h6>
						<span class='email'>${email}</span>
					</div>
				</div>
 */
