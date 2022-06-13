create schema blog;

create table blog.post (
    id serial primary key,
    title text not null,
    content text not null,
    date timestamp default now()
);

create table blog.user (
    id serial primary key,
    nome text not null,
    sobrenome text not null,
    email text not null,
    date timestamp default now()
);

insert into blog.post (title, content) values ('Teste', 'Testando');