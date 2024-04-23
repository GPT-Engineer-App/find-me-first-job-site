# find-me-first-job-site

Build a job site named, "Find me First", where job seekers register themselves as job seeker on the site, they include all their relevant details including, experience, skills, education, qualifications, location, desired jobs, a professional photo etc. A recruiter then searches the site based on the job title they are hiring for, skills they're looking for, and years of experience they need in that specific job. No jobs are posted on the site by companies like it is done the traditional way. Once companies search for candidates,they can then see all qualified candidates that matched the job they are hiring for and those candidates go into a shortlist. Companies should then have the option to contact shortlisted candidates directly from the site notifying them that they have been shortlisted and/or scheduling interviews with them from the site, therefore you need to include in app messaging features where both companies and candidates can communicate. This job site eliminates the need to review hundreds of applications which saves companies all the time in the world. This would be a win-win for both parties. Make this job site a high-level one. Job seekers register for free on the site, but include some premium features such as the ability to see who has viewed your profile and the ability to send direct messages to other users that will cost job seekers  $5 a month , and companies pay when they use the site to search for a candidate or candidates for a specific job, companies should have the option to search for candidates themselves by also registering on the site, or they can contact us with a list of vacancies and we (site owners) provide them with lists of shortlisted candidates, including doing all the in app messaging and pre interviews, including the custom aptitude tests, this will cost companies $20. The monthly fee per job seeker is $5 to use the site with premium features, and companies pay $10 for  using the site, and an additional $30 for every job seeker that they hire from the site. Once a candidate is shortlisted/chosen by a company, there should be messaging features where a company can contact a candidate on the site. There should also be an option for companies to directly from the site be able to contact references of candidates and be able to request reference letters from companies that candidates previously worked for therefore upon registration candidates should include previous work experiences with company names, and a reference from each company. Also, there should be an option where companies can request candidates to do an aptitude test and ask job-specific questions to those shortlisted candidates which they are able to create themselves almost like a pre-interview process that will also allow companies to even narrow down their shortlist more, this should be a plus feature where companies will pay an extra $5. Once a job seeker is hired, it will be displayed on their profile as hired. For all job seekers, there should be an "Open to Work" tag on their profile indicating they are still available for work, whether part-time, contract, or full-time. The site will be used by job seekers all over the world. Remember to include all payment methods for members(Job seekers, companies). Payment methods should consist of, EFT, Visa, Mastercard, American Express, and Discover cards should be accepted from users in all countries. This includes, PayPal, Stripe. The site should have an easy navigation user interface and a secure backend, therefore please use sqlite to store all data, and include all necessary security measures and error handling where necessary. The main colors pallets of the site should be white, orange, and black, meaning, all text of the site should be in black and the entire layout should be orange and white, an orange gradient with white would be perfect.

Separate from the site, build a dashboard where all activity of the site can be monitored and controlled. I should be able to see when companies look at candidates, their shortlists, who is hired, and all payment information on the dashboard.


Instructions:

System Design:

Create a high-level system design that outlines the major components of the job site, such as user registration, candidate search, shortlisting, payment system, and communication features.
Define the database schema to store user profiles, shortlisted candidates, and transaction records.

Front-End Development:

Develop the user interface (UI) for both job seekers and recruiters using a suitable web development framework like React, Angular, or Vue.js.
Design and implement user registration and login pages.
Create intuitive forms for job seekers to input their details, including experience, skills, education, and job preferences.
Design search result pages for recruiters to find qualified candidates.
Implement interactive features like messaging, notifications, and displaying "Open to Work" tags on job seeker profiles.
Ensure the UI is responsive, user-friendly, and visually appealing.

Back-End Development:

Set up a server-side application using a programming language like Python, Node.js, or Ruby.
Implement RESTful APIs to handle user registration, login, profile creation, shortlisting, and payment processing.
Develop secure authentication and authorization mechanisms to protect user data and control access to features.
Implement search algorithms and filters to match recruiters' requirements with job seeker profiles.
Integrate with payment gateways (e.g., PayPal) to process monthly fees and transaction charges.
Implement a database management system (e.g., SQLite) to store and retrieve user data efficiently.

Database Management:

Design and create the database schema based on the defined requirements.
Set up the necessary tables, relationships, and indexes.
Optimize the database performance by indexing frequently queried fields and using appropriate normalization techniques.
Implement data backup and recovery mechanisms to ensure data integrity.


Deployment and Hosting:

Set up the necessary infrastructure (e.g., servers, load balancers) to ensure scalability and availability.
Configure SSL certificates to secure communications using HTTPS.
Optimize server configurations for performance and security.
Set up monitoring tools to track system health, performance, and user activity.

Security and Privacy:

Implement robust security measures to protect user data, including encryption of sensitive information and secure authentication mechanisms.
Comply with data privacy regulations (e.g., GDPR) by obtaining user consent and handling data securely.
Regularly update and patch software components to defend against potential vulnerabilities.




## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/find-me-first-job-site.git
cd find-me-first-job-site
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
