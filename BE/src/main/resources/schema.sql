drop table if exists airbnb;
drop table if exists accommodation;
drop table if exists reservation_date;
drop table if exists picture;
drop table if exists reservation;
drop table if exists user;


create table airbnb (
    id int not null auto_increment primary key
);

create table reservation (
    accommodation int primary key references accommodation(id),
    user int references user(id),
    user_key int
);

create table user (
    id int not null auto_increment primary key,
    email TEXT,
    airbnb int references airbnb(id),
    airbnb_key int
);

create table reservation_date (
    id int not null auto_increment primary key,
    start_date date,
    end_date date,
    accommodation int references accommodation(id),
    accommodation_key int
);

create table picture (
    id int not null auto_increment primary key,
    url TEXT,
    accommodation int references accommodation(id),
    accommodation_key int
);

create table accommodation (
    id INT not null auto_increment primary key,
    hotel_name TEXT,
    description TEXT,
    location TEXT,
    street TEXT,
    latitude DOUBLE ,
    longitude DOUBLE,
    available_guest INT,
    current_price INT,
    previous_price INT,
    discount_price INT,
    hotel_rating DOUBLE ,
    airbnb INT references airbnb(id),
    airbnb_key INT
);

-- datagrip에 csv 파일 넣을 때 테이블 형
-- create table picture
-- (
-- 	id INT not null primary key,
-- 	url TEXT null,
-- 	accommodation INT references test_seattle_accommodation(id),
-- 	accommodation_key INT
-- );





