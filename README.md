# Itransition-task-4

**Task #4 (ALL GROUPS) **

Use language and platform **FOR YOU GROUP**:

* JavaScript or TypeScript, React, PostgreSQL or MySQL or any database (see below),
* C#, .NET, some kind ASP.NET, SQL Server or any database,
* PHP, Symfony, PostgreSQL or MySQL or any database (see below).

THE FIRST REQIUREMENT: YOU NEED TO CREATE A UNIQUE INDEX IN DATABASE.

THE SECOND REQUIREMENT: YOUR TABLE SHOULD LOOK LIKE TABLE AND YOUR TOOLBAR SHOULD LOOK LIKE TOOLBAR.

THE THIRD REQUIREMENT: DATA IN THE TABLE SHOULD BE SORTED (E.G., BY THE LAST LOGIN TIME).

THE FOURTH REQUIREMENT: MULTIPLE SELECTION SHOULD BE IMPLEMENTED USING CHECKBOXES (SELECT ALL/DELECT ALL IS ALSO A CHECKBOX).

THE FIFTH REQUIREMENT: BEFORE EACH REQUEST EXCEPT FOR REGISTRATION OR LOGIN, SERVER SHOULD CHECK IF USER EXISTS AND ISN'T BLOCKED (if user account is blocked or deleted, any next user’s request should redirect to the login page).

Create a _working and deployed (remotely accessible)_ Web application with user registration and authentication.

Non-authenticated users should not have access to the user management (admin panel). They have only access to login form or registration form.

Only authenticated users should have access the user management **table** with at least the following fields: (selection checkbox), name, e-mail, last login time (or the last “activity” time or both), status (active/blocked). You also may add registration time, some sparkline for activity, etc. (optional).

**The leftmost column** of the table should contains checkboxes without labels for multiple selection (table header contains _only checkbox without label that selects or deselects all the records_).

There must be a **toolbar** over the table with the following actions: Block (button with text), Unblock (icon), Delete (icon). NO BUTTONS IN EACH ROW.

You have to use any **CSS framework** (Bootstrap is recommended, but you can choose any CSS framework).

> All users should be able to block or delete _themselves_ or any other user.

**User can use any non-empty password (even one character).**

No e-mail confirmation should be required.

Blocked user should not be able to login, deleted user can re-register.

JUST IN CASE: YOU HAVE TO CREATE A UNIQUE INDEX IN THE DATABASE. NOT TO CHECK WITH YOU CODE FOR UNIQUENESS, BUT CREATE THE INDEX.

YOU STORAGE SHOULD GUARANTEE ***E-MAIL*** UNIQUENESS INDEPENDENTLY OF HOW MANY SOURCES PUSH DATA INTO IT SIMULTANEOUSLY.

Note that a _unique index_ is not the same as a _primary key_ (which you should have too):
https://en.wikipedia.org/wiki/Database_index

Generally, you can use any "architecture", either implement a classic Web-application with a server and a database or separate front from back. It's not important in this task. Generally, it's the most simple and straightforward to use a relational DB, e.g. PostgreSQL or MySQL. You can, if you wish, use anything else. E.g., MongoDB, but it really won't give you any advantage in this task (you just deprive yourself a very major skill). But you can. Or you can even try use some SaaS like Firebase. But be careful, you easily will get into some troubles. E.g.,  if you decide to use "out-of-the-box" users, it may be problematic to delete them. If you decide to use custom "users", you may have some problems with maintaining uniquieness of e-mails, etc. I have to remind, that you code can contain only error processing and management of uniqueness have to be performed on the storage level, but you code shouldn't contain checks whether the e-mail already exists. Arguably, the simplest solution is to use a classic boring "trivial" relational database. But even in Firebase you may try to create documents that uses e-mails as keys (again, it limits you ability to change e-mail by user request, etc.).

NO WALLPAPERS UNDER THE TABLE. NO ANIMATIONS. NO BROWSER ALERTS. NO BUTTONS IN THE DATA ROWS.

Your application should work properly in different browsers and on different resolutions (desktop/mobile). However, you have to get that automagically by properly using CSS framework like Bootstrap.

DON'T INVENT ANYTHING, USE LIBRARIES FOR EVERYTHING.

Implement:
1. adequate error messages;
1. tooltips;
1. status messages (informing user about succesful operation).
