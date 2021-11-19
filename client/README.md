# NOTIFICATION FACTORY

This is app is designed to make sending out notifications easier.
There should be a drop div in the upper left and three buttons on the upper right
  - package
  - Emergency Line
  - Door Duty

On the bottom there should be a list of all the employees. 
The top 10 (Usual suspects) should be at the top. 
You can drag ee names into the dropbox and then hit one of the buttons to send an email accordingly.

#IMPROVEMENTS

- The apps state should contain 2 arrays 
  - currList
  - employees

  - when someone is pulled from employees to currList for example and an email is sent, the employees frequency attribute should be updated (incremented by 1).
  - the usualSuspects array should be composed of the top 10 employees according to frequency

- Add a page where you can add employees (go full crud)
