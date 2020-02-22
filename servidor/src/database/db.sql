create table users (
	id serial primary key,
	user_name varchar(50),
	user_lastname varchar(50),
	user_email varchar(100),
	user_pass varchar(100)
);

create table questions (
	id serial primary key,
	question varchar(100),
	true_answer varchar(255),
	false_answer varchar(255),
	imagen text
);