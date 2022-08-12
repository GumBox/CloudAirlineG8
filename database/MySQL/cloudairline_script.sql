use cloudairline;
create table user(
userId int(6) not null auto_increment primary key,
userFullname varchar (50) not null,
userGender boolean default 0,
address varchar(100) not null,
phone int (10) not null, 
transactionId int(6) references transaction(transaction_id));
create table transaction(
transactionId int(6) not null auto_increment primary key,
cardNumber int(15) not null,
typeOfCard varchar(10) not null,
cvcCode int(3));
create table plane(
planeId int(1) not null auto_increment primary key,
flightName varchar(10) not null,
planeType varchar (5) not null,
planeBrand varchar (10) not null);
create table ticket(
ticketId int (2) not null auto_increment primary key,
seatNumber varchar (3) not null, 
ticketType boolean default 0,
ticketBuyingDate date,
ticketPrice int(8));
create table place(
placeId int (2)not null auto_increment primary key,
placeFrom varchar (20) not null,
placeTo varchar(20) not null);
create table booking(
bookingId int(6) not null auto_increment primary key,
userId int(6) references user(userId),
ticketId int (2),
foreign key (ticketId) references ticket(ticketId),
placeId int(2),
constraint fk_place foreign key(placeId) references place(placeId));
alter table booking add column planeId int(1);
alter table booking add foreign key (planeId) references plane(planeId);
create table login(
loginId int(2) not null auto_increment primary key,
username varchar(20) not null,
password varchar (20) not null,
userId int(6) references user(userId));

