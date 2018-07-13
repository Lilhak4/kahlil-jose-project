# kahlil-jose-project

USER STORIES - 

404
500
Signup
Login
Sign out
List
Create Search by instrument needed
Band details
create band with instrument needed
create band with members
apply w/ message
view applicant
view profile
delete profile

ROUTES - 

Home -> Get /
Signup -> Get/Post /auth/signup
Login -> Get/Post /auth/login
band-detail -> Get /band-detail
band-creator -> Post /band:id
profile -> Get /profile
profile-edit -> Get/Post /profile/edit
application -> Get(?) /application

MODELS -

User
username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

Band
bandName: {
    type: String,
    required: true
  },
  instrument_needed: {
    type: String,
    required: true
  },
  members: {
    type: String
  },
  user: {
    type: String
  }

TRELLO - 
https://trello.com/b/kp4pBfpY/kahlil-jose-project
