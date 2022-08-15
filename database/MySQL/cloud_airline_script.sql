create database cloud_airline;

use cloud_airline;
create table login(
username varchar(8) not null primary key,
password varchar (20) not null,
user_id int (3) references user(user_id));

create table users(
user_id int(5) not null auto_increment primary key,
receipt_id int(5) not null references receipt(receipt_id));

create table receipt(
receipt_id int(5) not null auto_increment primary key,
receipt_buying_date date,
card_number int(15) references card(card_number));

create table card(
card_number int(15) not null primary key,
type_of_card varchar(20) not null,
cvc_code int(3) not null);

create table place(
place_id int(2) not null auto_increment primary key,
place_departure varchar (10) not null,
place_arrival varchar(10) not null);

create table plane(
plane_id int(3) not null auto_increment primary key,
flight_name varchar(5) not null,
plane_type varchar(10) not null,
plane_brand varchar(10) not null,
total_seat int(3) not null);

create table customer(
customer_id int(6) not null auto_increment primary key,
fullname varchar(50) not null,
gender boolean default 0,
address varchar (100) not null,
phone int(11) not null,
email varchar(30)not null);

create table ticket(
ticket_id int(10) not null auto_increment primary key,
ticket_buying_date date,
ticket_price int(10) not null,
seat_number int(2) not null,
place_id int(2) not null references place(place_id),
plane_id int(3) not null,
foreign key (plane_id) references plane(plane_id),
customer_id int(6) not null,
constraint fk_customer foreign key (customer_id) references customer(customer_id),
receipt_id int(5) not null);

alter table ticket add foreign key (receipt_id) references receipt(receipt_id);
