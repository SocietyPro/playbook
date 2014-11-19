#Automated Testing

* Fast builds 
  * unit/integration tests, runs in less than 5 minutes
  * notification is sent to the team lead and to developers having committed changes.
* Slow builds 
  * acceptance test builds, run after the fast builds 
  * notification is sent to team lead, testers, and developers having committed changes.
* Nightly builds 
  * QA metrics, performance tests, and so on
  * only run if the other builds work
  * status available to all team members
  * these provide a snapshot picture of project health before the daily scrum meeting.
