drop table if exists houses;

create table if not exists houses(
    house_id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
);

-- insert into users(
--     first_name,
--     last_name,
--     email
-- )values(
--     'mike',
--     'alfandre',
--     'mike@gmail.com'
-- );

-- insert into users(
--     first_name,
--     last_name,
--     email
-- )values(
--     'tom',
--     'johnston',
--     'tom@gmail.com'
-- );

-- insert into users(
--     first_name,
--     last_name,
--     email
-- )values(
--     'james',
--     'smith',
--     'james@yahoo.com'
-- );