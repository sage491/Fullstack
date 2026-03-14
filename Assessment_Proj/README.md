# Assessment_Proj

Express server that logs the current date/time for each request and exposes a POST `/student` endpoint that echoes the request body.

Run:

1. Install dependencies:

```powershell
cd "C:\Users\ASUS\Downloads\Fullstack\Assessment_Proj"
npm install
```

2. Start the server:

```powershell
npm start
```

3. Test the endpoint (example):

```powershell
Invoke-RestMethod -Uri http://localhost:3000/student -Method POST -Body '{"name":"Alice","age":21}' -ContentType 'application/json'
```
