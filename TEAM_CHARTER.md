# Team Charter & Working Agreement

# Team Members & Roles

James Nichols \- AI DevOps and AWS Focal/Devloper

Nicholas Guiley \- Applied Cybersecurity and Full-Stack Development Engineer

Brendan Laus \- Applied AI Engineer and Backend Development specialist

Shawn Kitagawa \- Security & OPA Policy Engineer

# Decision-Making Model

We will be using majority vote and general group discussions in order to make major decisions for the project. For minor changes, a member will use their opinion and be open to discussion if changes need to be made. 

# Meeting Cadence & Tools

| *Meeting* | *Purpose* | *Length* | *When / Where* | *Tools* | *Response-Time* |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Sprint Meeting w/ TA | Display progress over the previous two weeks and address any potential concerns | Typically \~ 30mins, but can extend as far as TA requests | Zoom on Fridays (only at 5:30pm PST so far, but this time may be subject to change in the future) | Zoom recording | Clarify reasons for absence *as soon* as that information becomes available (preferably \> 24hrs before meeting) |
| Project Checkin w/ Project Partner | See if our understanding and implementation of the project is of satisfactory quality | Typically between 30-60 minutes | On Zoom, timing is flexible, typically bi-weekly whenever the Project Partner is available. | Zoom recording | Clarify reasons for absence *as soon* as that information becomes available (preferably \> 24hrs before meeting) |
| Team Checkin | Work through any synchronous tasks as a group. | As needed. | Weekends, Discord | Different channels with links to ensure quick and easy access to the project at hand | Clarify reasons for absence *as soon* as that information becomes available (preferably \> 24hrs before meeting) |

# Risk Management & Escalation Path

**Normal Flow:**

* Team Member → Assigned Lead (Security, Compliance, or Systems) → Instructor / Project Sponsor.

**Urgent (Security or Compliance Breach):**

* Immediate Slack or email alert to all team members and the instructor.

* Submit AWS CloudWatch logs, IAM role IDs, and timestamps as evidence.

**Routine Technical Issue:**

* Logged in Team Communication channel (Discord).

* Reviewed in weekly team sync or next sprint checkpoint.

# Conflict Resolution & Accountability

- Triggers   
  - Approaching deadline  
  - Lack of participation  
  - Project decision concerns  
  - Communication concerns  
  - Lack of respect/collaboration  
- Stepwise Restorative Actions  
  - When an issue is noticed, communicate first with the individual.  
    - The goal is to clarify confusion.  
    - Make sure to document decisions and review together. If needed, present to the rest of the group.  
  - If needed, come to an agreement with the group as a whole.  
  - If further help is needed, communicate with class leaders, project partners, or similar individual(s).  
- Timelines  
  - Communicate with individual within two days.  
  - Escalate to team within five days.  
  - Further escalate to class leads within 10 days.  
- How Objective Evidence (PRs, reviews, attendance) Will be Used  
  - Overall, all members are expected to contribute to the necessary group work. Once our roles are more clearly defined, different categories will be completed in different amounts by different roles. The below pieces of evidence will be used to prove the contribution of each individual.  
  - PRs / Commits  
    - Proof of coding contribution, role dependent.  
  - Sent emails  
    - Proof of external communication, role dependent.  
  - Meeting attendance  
    - Proof of internal communication, role independent.

# Definition of Done (DoD) & Quality Gates

| Category | Definition of Done | Owner |
| ----- | ----- | ----- |
| Code & Tests | Code runs without errors; all tests pass (≥95% coverage); includes clear comments and doc strings. | Developer |
| Security | No hardcoded secrets; static scan (Code Guru/Bandit) shows no high or critical issues. | Team |
| Docs & Reviews | README and diagrams updated; at least one peer review approval required. | Team |
| Deployment | Passes Bedrock sandbox test and CloudWatch logs verified. | DevOps Lead |

# Accessibility & Inclusion Practices

Specify meeting norms (time zones, turn-taking, note-taking), accommodation process, and how barriers will be surfaced/addressed.

| *Meeting norms:* | *Potential Barrier:* | *Plan to Address:* |
| :---- | :---- | :---- |
| Meetings tend to be later in the day for group work and earlier for project partner or TA meetings | We are balancing different time zones between Pacific Standard Time and Japan Standard Time | We have organized around what time is *possible* for all group members, not necessarily what is most *comfortable* for all group members, to ensure that meetings can be attended by all. |
| Meetings over Zoom have been recorded when possible | Meeting keys could be forgotten or lost | Zoom meeting keys will be recorded and publicized when requested upon review of a previous meeting. |

# Policy Owners & Review Dates

Assign an owner and next review date for each section; explain how updates are proposed and approved.

Minor updates will be pushed by members and will be discussed during weekly meetings.

Major updates that affect multiple areas will be discussed before pushing, and have members all pull as soon as pushed so that any changes they need to make in branches can happen.

# Links & Artifacts

Link to meeting agenda/notes template, CI dashboard, linter/formatter config, and any external docs referenced.