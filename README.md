# kahlil-jose-project

**USER STORIES**

- **404** As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500**  As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
- **Signup** As a user I want to sign up on the webpage so that I can see the services I could require.
- **Login** As a user I want to be able to log in on the webpage so that I can get back to my account.
- **Sign out** As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **List** As a user I want to see all of the bands that are already created.
- **Create Search by instrument needed** As a user I want to enter the page and search for the instrument I need.
- **Band details** AS a user I want to see what the specific details for the band I have selected.
- **create band with instrument needed** As a user I want to create a band that needs additional people to playt a specific instrument
- **create band with members** As a user I want to create a band that needs additional members in the band.
- **apply w/ message** As a user I want to be able to apply to a band with the click of a button on the same page.
- **view applicant** As a user I want to view an applicant who appliues for my band.
- **view profile** As a user I want to view my profile along with the profiles of other users.
- **delete profile** As a user I want to be able to delete my profile. 

**ROUTES** 

- **Home** -> Get /
- **Signup** -> Get/Post /auth/signup
- **Login** -> Get/Post /auth/login
- **band-detail** -> Get /band-detail
- **band-creator** -> Post /band:id
- **profile** -> Get /profile
- **profile-edit** -> Get/Post /profile/edit
- **application** -> Get(?) /application

**MODELS**

- User
- username: {
    - type: String,
    - required: true
  - },
  - password: {
    - type: String,
    - required: true
  - }

- Band
- bandName: {
    - type: String,
    - required: true
  - },
  - instrument_needed: {
    - type: String,
    - required: true
  - },
  - members: {
    - type: String
  - },
  - user: {
    - type: String
  - }

TRELLO
- https://trello.com/b/kp4pBfpY/kahlil-jose-project
