# 📧 Automated Email Notification System

A Google Sheets automation that automatically sends personalized 
Gmail notifications when a task status is updated to **"Done"**.

---

## 🔗 Live Demo
https://docs.google.com/spreadsheets/d/1oL0bkLKpAT8QTCphufA6mAoTPBpNqY4s6nBlH4F-ou8/edit?usp=sharing

---

## 📸 Preview
<img width="1919" height="827" alt="image" src="https://github.com/user-attachments/assets/6091d511-3588-48bc-8796-b8bc6b0320a0" />
)

---

## 📌 About The Project
This project automates email notifications using Google Apps Script.
When a task status in Column C is changed to "Done", an email is 
automatically sent to the person listed in Column B — no manual work needed.

---

## 🛠️ Tech Stack
- **Google Apps Script** — Backend automation
- **Google Sheets** — Data source
- **JavaScript** — Scripting language
- **Gmail API (MailApp)** — Email service

---

## 📂 Sheet Structure

| Column A | Column B | Column C |
|----------|----------|----------|
| Name | Email ID | Status |
| Alice | alice@gmail.com | Pending |
| Bob | bob@gmail.com | Done |

---

## ⚙️ How It Works
1. User updates **Column C** to `Done`
2. Apps Script detects the edit via **Installable Trigger**
3. Script reads **Name** from Column A and **Email** from Column B
4. Personalized email is sent automatically via **Gmail**
5. Execution logs track every success and error in real time

---

## 🚀 Setup Instructions

### Step 1 — Open Google Sheet
- Create a new Google Sheet
- Add columns: **Name | Email ID | Status**

### Step 2 — Open Apps Script
- Click **Extensions → Apps Script**
- Delete existing code
- Paste the code from `Code.gs`

### Step 3 — Create Installable Trigger
- Select `createTrigger` from dropdown
- Click ▶️ Run
- Click **Allow** to grant permissions

### Step 4 — Test It
- Type `Done` in Column C
- Check your Gmail inbox ✅

---

## 📧 Email Template
