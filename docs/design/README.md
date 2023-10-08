# Проєктування бази даних

В рамках проекту розробляється: 

## Модель бізнес-об'єктів 

@startuml
entity User <<ENTITY>> #33FFEC
entity User.name <<TEXT>>
entity User.password <<TEXT>>
entity User.mail <<TEXT>>
entity User.id <<NUMBER>>

entity Expert <<ENTITY>> #33FFEC
entity Expert.gender <<TEXT>>
entity Expert.age <<NUMBER>>
entity Expert.id <<NUMBER>>
entity Expert.money_earned <<NUMBER>>

entity Specialty <<ENTITY>> #33FFEC
entity Specialty.name <<TEXT>> 

entity Client <<ENTITY>> #33FFEC
entity Client.id <<NUMBER>>

entity Answers <<ENTITY>> #33FFEC
entity Answers.field <<OBJECT>>
entity Answers.expertId <<NUMBER>>
entity Answers.pollId <<NUMBER>>

entity Question <<ENTITY>> #33FFEC
entity Question.id <<NUMBER>>
entity Question.type <<TEXT>>
entity Question.text <<TEXT>>

entity Poll <<ENTITY>> #33FFEC
entity Poll.clientId <<NUMBER>>

User "1" -- "1" Client
User "1" -- "1" Expert

Poll "0..*" -u-* "1" Client
Poll "1" -- "0..1" Answers
Poll.clientId -u-* Poll

Question "1..*" -u-* "1" Poll
Question.id -u-* Question
Question.type -u-* Question 
Question.text -u-* Question 

Specialty.name -u-* Specialty

Expert.age -u-* Expert
Expert.id -u-* Expert
Expert.gender -u-* Expert
Expert.money_earned -u-* Expert
Specialty "1..*" -- "1" Expert

Answers.pollId -u-* Answers
Answers.field -u-* Answers
Answers.expertId -u-* Answers
Answers "0..*" -u-* "1" Expert

Client.id -u-* Client

User.name -u-* User 
User.password -u-* User
User.mail -u-* User
User.id -u-* User

@enduml

## ER-модель

@startuml

  entity User <<ENTITY>> {
    id:INT
    password:TEXT
    name:TEXT
    mail:TEXT
  }
  
  entity Expert <<ENTITY>>{
    id:INT
    age:INT
    money_earned:INT
    job:TEXT
  }

  entity Client <<ENTITY>>{
    id:INT
  }

  entity Specialty <<ENTITY>>{
    name:TEXT
  }

  entity Answers <<ENTITY>> {
    expertId:INT
    pollId:INT
    field:Object
  }
  
  entity Poll <<ENTITY>>{
    pollId:INT
  }
  
  entity Question <<ENTITY>>{
    id:INT
    type:TEXT
    text:TEXT
  }


  User "1" -d-> "1" Expert
  User "1" -d-> "1" Client
  Expert "1" -d-> "1..*" Specialty
  Expert "1" <-d- "0..*" Answers
  Client "1" <-d- "0..*" Poll
  Question "1..*"-l-> "1" Poll
  Answers "0..1" <-u- "1" Poll
  
@enduml

- реляційна схема

