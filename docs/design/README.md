# Проєктування бази даних

В рамках проекту розробляється: 

## Модель бізнес-об'єктів 

@startuml

  entity User <<ENTITY>> #33FFEC
  entity User.name <<TEXT>>
  entity User.password <<TEXT>>
  entity User.mail <<TEXT>>
  entity User.id <<NUMBER>>
  entity User.gender <<TEXT>>
  entity User.age <<NUMBER>>

  entity Qualification <<ENTITY>> #33FFEC
  entity Qualification.id <<NUMBER>>
  entity Qualification.level <<NUMBER>>

  entity Specialty <<ENTITY>> #33FFEC
  entity Specialty.id <<NUMBER>>
  entity Specialty.name <<TEXT>>

  entity Grant <<ENTITY>> #33FFEC
  entity Grant.id <<NUMBER>>
  entity Grant.assignedAt <<Date>>

  entity Role <<ENTITY>> #33FFEC
  entity Role.id <<NUMBER>>
  entity Role.name <<TEXT>>
  
  entity EarnedMoney <<ENTITY>> #33FFEC
  entity EarnedMoney.id <<NUMBER>>
  entity EarnedMoney.date <<Date>>
  entity EarnedMoney.amount <<NUMBER>>
  entity EarnedMoney.tookAway <<TEXT>>

  entity Poll <<ENTITY>> #33FFEC
  entity Poll.id <<NUMBER>>
  entity Poll.title <<TEXT>>
  entity Poll.description <<TEXT>>

  entity Question <<ENTITY>> #33FFEC
  entity Question.id <<NUMBER>>
  entity Question.type <<TEXT>>
  entity Question.text <<TEXT>>

  entity Answer <<ENTITY>> #33FFEC
  entity Answer.id <<NUMBER>>
  entity Answer.field <<OBJECT>>
  
  entity Action <<ENTITY>> #33FFEC
  entity Action.id <<NUMBER>>
  entity Action.date <<Date>>
  
  entity State <<ENTITY>> #33FFEC
  entity State.id <<NUMBER>>
  entity State.text <<TEXT>>
  entity State.type <<TEXT>>

  User.name -d-* User 
  User.password -d-* User
  User.mail -d-* User
  User.id -d-* User
  User.age -d-* User
  User.gender -d-* User

  User "1,1" -- "0,*" Grant
  User "1,1" -- "0,*" Qualification

  Grant.id --* Grant
  Grant.assignedAt --* Grant 

  Grant "0,*" -- "1,1" Role

  Qualification.id -u-* Qualification
  Qualification.level -u-* Qualification

  Qualification "0,*" -- "1,1" Specialty

  Specialty.id -u-* Specialty
  Specialty.name -u-* Specialty

  Role.id -u-* Role
  Role.name -u-* Role

  Poll "0,1" -u- "0,*" Grant
  
  Poll.id -u-* Poll
  Poll.title -u-* Poll
  Poll.description -u-* Poll

  Question "0,*" -u-* "1,1" Poll:poll
  
  Question.id -u-* Question
  Question.type -u-* Question 
  Question.text -u-* Question

  Question "1,1" -u- "0,*" Answer

  Answer.id -u-* Answer
  Answer.field -u-* Answer
  
  Answer "0,1" -u- "0,*" Grant
  
  Action.id -u-* Action
  Action.date -u-* Action
  
  Action "0,*" -u- "1,1" Poll
  Action "0,*" -u- "1,1" Grant
  
  State.id -u-* State
  State.text -u-* State
  State.type -u-* State
  
  State "1,1" -u- "0,*" Action
  
  User "1,1" -- "0,*" EarnedMoney
  EarnedMoney "0,*" -- "1,1" Poll
  
  EarnedMoney.id -u-* EarnedMoney
  EarnedMoney.date -u-* EarnedMoney
  EarnedMoney.amount -u-* EarnedMoney
  EarnedMoney.tookAway -u-* EarnedMoney

@enduml

## ER-модель

@startuml 
 
  entity User <<ENTITY>> { 
    id:INT 
    password:TEXT 
    name:TEXT 
    mail:TEXT
    age:INT
    gender:TEXT
  }

  entity Grant <<ENTITY>> { 
    id:INT 
    assignedAt:Date 
  } 

  entity Role <<ENTITY>> { 
    id:INT 
    name:TEXT ("client", "expert") 
  }

  entity Specialty <<ENTITY>> { 
    id:INT 
    name:TEXT 
  } 

  entity Qualification <<ENTITY>>{ 
    id:INT 
    level:NUMBER (1,2,3) 
  }

  entity Answer <<ENTITY>> { 
    id:INT 
    field:Object 
  }

  entity Poll <<ENTITY>>{ 
    id:INT 
    title:TEXT 
    description:TEXT 
  } 

  entity Question <<ENTITY>>{ 
    id:INT 
    type:TEXT 
    text:TEXT 
  }

  entity Action <<ENTITY>>{ 
    id:INT 
    date:Date 
  }

  entity State <<ENTITY>>{ 
    id:INT 
    type:TEXT (start, stop, submit answers, change poll, show answers)
    text:TEXT 
  }
  
  entity EarnedMoney <<ENTITY>>{ 
    id:INT 
    date:Date 
    amount: INT
    tookAway: TEXT (yes, no)
  }

  Qualification "0,*" -l-> "1,1" User 
  Qualification "0,*" -r-> "1,1" Specialty 
    
  Grant "0,*" -u-> "1,1" User 
  Grant "0,*" -r-> "1,1" Role 
  Grant "0,*" -l-> "0,1" Answer 
  Grant "0,*" -l-> "0,1" Poll 
  Question "0,*" -d-> "1,1" Poll: pool 
  Answer "0,*" -l-> "1,1" Question 
  Action "0,*" -u-> "1,1" Poll
  Action "0,*" -u-> "1,1" Grant
  Action "0,*" -r-> "1,1" State
  User "1,1" <-l- "0,*" EarnedMoney
  EarnedMoney "0,*" -d-> "1,1" Poll

@enduml

## Реляційна схема
![image](https://github.com/kujo205/db_labs/assets/45692117/82df78b9-e2a8-487a-b1d3-3609e8ac88bf)



