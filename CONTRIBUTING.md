# Contributing Guide

Welcome! This guide explains how to set up, code, test, review, and release so that all contributions meet our **Definition of Done**.

---

## 🧱 Expectations for Code Creation

Before writing code, discuss the necessity when possible, and always work on a **testing branch**.

All impactful code must:
- ✅ Compile successfully  
- ✅ Run without errors  
- ✅ Contain sound and explicable logic  
- ✅ Include comments explaining all non-trivial actions  

---

## 🧪 Code Testing

Before moving to review, confirm the following:

1. **Necessity:** Is this code necessary?  
2. **Impact:** What might this code affect?  
3. **Precision:** Does it do exactly what it should — and nothing more?  
4. **Peer Check:** Have I checked this with another teammate?  
5. **Dependencies:** Will it run without bloating dependency requirements?

Once these checks pass:
- Have **at least one teammate** review the code.
- Submit a **Pull Request (PR)** with a clear description of:
  - What the code does  
  - Why it does it  

---

## 👀 Code Review

- All PRs must be reviewed by **at least one teammate**.
- Reviews should ensure compliance with code requirements and logic clarity.
- Any requested changes must be addressed before merging.

---

## 🚀 Code Release

- Code is released via the **main branch** after successful testing and review.
- All merges should originate from the **project-ready** branch (following the GitFlow process).
- Large structural changes may require re-scaling discussions before merge.

---

# 🧭 Code of Conduct

This project follows the team’s Code of Conduct as detailed in the **Team Charter**.

### Expectations
- Treat all team members with **respect, patience, and kindness**.  
- **Communicate proactively** — especially when issues affect your ability to contribute.  
- Attend all meetings or notify the team if attendance isn’t possible.  
- Respond to team communications (e.g., Discord) within **one business day**.  
- Be ready to **explain your work** and **share your expertise**.  
- Remember: *Communication prevents misunderstanding.*

### In Case of Conflict
1. Attempt direct, professional resolution with the involved party.
2. If unresolved, bring the issue to the **group for consensus**.
3. If still unresolved, **consult a TA** for mediation.

> 💡 Remember: We’re a team — one person’s success is everyone’s success.

---

# 🛠 Getting Started

### Prerequisites
- AWS account  
- Visual Studio Code (or other interpreter)  
- Python  
- GitHub account  

### Current Setup
1. Clone the repository.  
2. Log in to your AWS account.  
3. Run the server locally using **React**.  
4. Access the AI models through the AWS account.  

---

# 🌿 Branching & Workflow

We use a **GitFlow** workflow.

- Work locally in the branch: `new-feature`  
- Push changes to: `project-ready` (for testing/integration)  
- Merge to: `main` (production-ready branch)

> All changes should be **merged**, not rebased, unless major restructuring is required.

---

# 🗂 Issues & Planning

### Issue Tracking
- Currently managed in **Discord**.  
- As the frontend evolves, user-facing issue submission will be added.

### When Logging Issues
- Describe the problem clearly.  
- Include any error messages, logs, or steps to reproduce.

---

# 💬 Commit Messages

### Convention
State **what** the code does and **why** it does it.  
When fixing issues, include:
- The **file name**  
- The **previous line number(s)** before changes  
- Whether the issue is now fixed or pending

---

# 🧹 Code Style, Linting & Formatting

**Status:** _Undefined at this stage._

Formatting, linting, and code style requirements will be defined as the project evolves.

---

# 🧩 Testing

**Status:** _Undefined at this stage._

In the future, we will define:
- Required test types (unit/integration/etc.)
- How to run tests locally
- Coverage thresholds
- When tests are mandatory for new code

---

# 🔀 Pull Requests & Reviews

PR Requirements:
- Clear title and description
- Summary of purpose and functionality
- Checklist confirming testing and review
- At least one approving review before merge
- No unresolved comments

---

# ⚙️ CI/CD

**Status:** _Under development._

The project will include:
- Pipeline definitions for testing and deployment
- Log viewing and job re-run instructions
- Required checks that must pass before merge/release

---

# 🔒 Security & Secrets

- **Never hard-code secrets** or credentials in the codebase.
- Authentication is handled through a **database-verified token** system.
- Only authenticated tokens can send or receive messages.
- Security vulnerabilities should be reported directly to the maintainers.

---

# 📝 Documentation Expectations

When submitting changes, ensure related documentation is updated:

| File | Purpose |
|------|----------|
| **README.md** | Overview of the project, setup, and running instructions |
| **PULL_REQUEST.md** | Updated based on requested changes |
| **CONTRIBUTING.md** | Updated as the project grows and gains features |

All non-trivial code should include **docstrings** or **inline comments** explaining logic and behavior.

---

# 🏷 Release Process

**Status:** _Undefined at this stage._

Future definitions will include:
- Versioning scheme (e.g., Semantic Versioning)
- Tagging and changelog creation
- Packaging/publishing steps
- Rollback procedures

---

# 💬 Support & Contact

- **Teams Channel:**  
  [General | CS Capstone - Securing Agent-to-Agent Communication in Generative AI Systems](#)

- **Response Window:** Within **1 week**

- **Questions or Issues:**  
  Post in the `#IssuesOrQuestions` channel on Teams or Discord.




