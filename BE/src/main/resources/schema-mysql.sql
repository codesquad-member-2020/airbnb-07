drop table if exists airbnb;
drop table if exists accommodation;
drop table if exists reservation_date;
drop table if exists picture;
drop table if exists reservation;
drop table if exists user;

create table airbnb (
    id int not null auto_increment primary key,
    jack TEXT
);

create table user (
    id int not null auto_increment primary key,
    email TEXT,
    airbnb int references airbnb(id),
    airbnb_key int
);

create table accommodation_reservation (
    id int not null auto_increment primary key,
    start_date date,
    end_date date,
    people int,
    total_price int,
    accommodation int references accommodation(id),
    accommodation_key int
);

create table user_reservation (
    id int not null auto_increment primary key,
    start_date date,
    end_date date,
    people int,
    total_price int,
    user int references user (id),
    user_key int
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


drop table TBL_USER if exists;

CREATE TABLE TBL_USER (
  id varchar(40) NOT NULL,
  username varchar(45) NOT NULL,
  password varchar(45) NOT NULL
);
