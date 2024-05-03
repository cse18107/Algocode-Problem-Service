# Algocode Problem Setting Service

---

**How routing is working in the project**

- /api/v1/problems/ping
  - because the route starts with /api
    - apiRouter  -->  v1Router  -->  problemRouter  -->  problemController  --> service layer
    - /api           -->   /v1           -->  /problems          -->  /ping
