
# PERSONAL FINANCE MANAGEMENT API

## 📄 Description
The API serves as a financial manager where users can add income and expenses. Based on this data, the current balance is calculated, and a statement of all transactions is available, displaying the most recent ones first. To access the system, users must create an account and log in.

## 🚀 Features

   - 👤 User Registration <br>
      User registration undergoes data consistency validation, followed by a database check to prevent duplicate or existing records.
   
   - ✅👤 Login <br>
      After successful registration, users can log in. The provided data is validated for consistency and existence, returning potential errors when applicable. Once login is authorized, the user is authenticated via JWT. The current balance is displayed upon login, which is zero if no transactions exist.

   - 💰 Transactions <br>
     Transactions are structured with a type, category, amount, and an optional description. The type must be either "Income" or "Expense."

      - Ex: 
         ```bash
         tipo: Despesa
         categoria: Entretenimento 
         valor: R$ -60,00
         descrição: McDonald's 
         ```
   - 🧾 Statement and Balance <br>
      Users can view their transaction history as well as their current balance. To access the statement, the system retrieves the authenticated user’s userId and queries the database for transactions linked to the account.

---

## 🔍 Overview

The API enables users to manage their personal finances, including:

- **User registration and authentication**.
- **Transaction logging (income and expenses).**
- **Financial statement retrieval**.
- **Data validation to ensure consistency and security**

---

## 🔧 How to Run the Project

### **Pré-requisitos**
- Docker Desktop 

### **Execution Steps**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FinanceControlProject/Backend
   cd api-financeira

2. **Install and open Docker Desktop**
   
3. **In the project root, open the terminal and paste the following code to start the API server:"**
   ```bash
   docker run -p 3000:3000 api/wallet:v1.0


---

## Methods & Endpoints API
```bash
POST /register - Creates a new user  
POST /login - Logs in and authenticates the user  
POST /transactions - Adds an income or expense transaction  
GET /list-transactions - Retrieves the transaction statement 
```
---
#### Future Updates:
 - Spending percentage by category.
 - Future spending projection based on behavior.
Financial Goals and Planning:
 - Artificial Intelligence to notify possible security measures and advice, acting in the protection and appreciation of the user's capital, such as:
   - alerts of balance below the planned limit;
   - advice on possible unnecessary expenses;
   - profitable investment tips.





   
  


