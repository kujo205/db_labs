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
entity AnswersField <<OBJECT>>

entity Question <<ENTITY>> #33FFEC
entity QuestionId <<NUMBER>>
entity QuestionType <<TEXT>>
entity QuestionText <<TEXT>>

entity Poll <<ENTITY>> #33FFEC
entity PollId <<NUMBER>> 

User "1" -- "1" Client
User "1" -- "1" Expert

Poll "0..*" -u-* "1" Client
Poll "1" -- "0..1" Answers
Poll  -- Client.id

Question "1..*" -u-* "1" Poll
QuestionId -u-* Question
QuestionType -u-* Question 
QuestionText -u-* Question 

Specialty.name -u-* Specialty

Expert.age -u-* Expert
Expert.id -u-* Expert
Expert.gender -u-* Expert
Expert.money_earned -u-* Expert
Specialty "1..*" -- "1" Expert

PollId -u-* Answers
AnswersField -u-* Answers
Expert.id -u-* Answers
Answers "0..*" -u-* "1" Expert

Client.id -u-* Client

User.name -u-* User 
User.password -u-* User
User.mail -u-* User
User.id -u-* User

@enduml

- ER-модель
- реляційна схема

