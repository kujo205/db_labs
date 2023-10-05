# Проєктування бази даних

В рамках проекту розробляється: 

## Модель бізнес-об'єктів 

@startuml
entity User <<ENTITY>> #33FFEC
entity User.passwrod <<TEXT>>
entity User.mail <<TEXT>>
entity User.id <<NUMBER>>

entity Expert <<ENTITY>> #33FFEC
entity Expert.age <<NUMBER>>
entity Expert.specialties <<ARRAY>>
entity Expert.id <<NUMBER>>
entity Expert.answerlds <<ARRAY>>

entity Client <<ENTITY>> #33FFEC
entity Client.id <<NUMBER>>
entity Client.pollIds <<ARRAY>>

entity Answer <<ENTITY>> #33FFEC

entity Poll <<ENTITY>> #33FFEC
entity questionId <<ARRAY>>

User "1" -- "0..*" Client
User "1" -- "1" Expert
Expert "1" -- "1..*" Answer
Poll "0..*" -u-* "0..*"Client
Poll "1" -- "0..1" Answer

Expert.age -u-* Expert
Expert.specialties -u-* Expert
Expert.id -u-* Expert
Expert.answerlds -u-* Expert

Client.id -u-* Client
Client.pollIds -u-* Client

User.passwrod -u-* User
User.mail -u-* User
User.id -u-* User

questionId -u-* Poll
@enduml

- ER-модель
- реляційна схема

