By default, username + password login works.

Email is commented out — just remove comments in models/User.js and authController.js if you want to use email later.

Protected route /api/auth/me demonstrates JWT auth and can be used in frontend AuthProvider.



🎯 Frontend Flow Overview

LandingPage
Fetch a cat meme from the web (random or placeholder).
Buttons: Login / Sign Up.
LoginPage
Username + Password.
“New here? Create an account” → links to RegisterPage.
RegisterPage
Username + Password (optionally email commented out).
On success, either:
Redirect to Login → industry common practice, safer
Or auto-login → less common in starter templates, could be optional.
We’ll go with redirect to Login for clarity.
HomePage (CatPage)
Protected route. Shows a cat meme celebrating login.
Navbar
Shows Login if not authenticated.
Shows Username + Logout if authenticated.