## Cloud Functions for Firebase with Node Mail
Serverless Mailsender

## Usage
You can clone this project with `git clone git@github.com:Nismit/cffnm.git` after that you need to setup Firebase Project. When you created a Firebase project, you'll set the project id to `.firebaserc`

```
{
  "projects": {
    "default": "<Project Name>"
  }
}
```

### Set Environment Variable
The email sender is using Gmail System. It needs email address and password. For security reason, you need to set the environement variables into Firebase via Firebase CLI.
https://firebase.google.com/docs/functions/config-env

```
firebase functions:config:set someservice.email="example@gmail.com" someservice.password="Gmail password"
```

### Enable Third-party Access
You might need to allow a third-party app access.
1. Access to your Google Account
2. Go to Security page
3. Turn on `Less secure app access`
4. You will get an alert e-mail from Google, then you need to confirm that you did turn on `Less secure app access`

Firebase Functions Trigger URL Example (This link does not work, FYI)\
https://us-central1-your-project-name.cloudfunctions.net/sendMail?dest=example@example.com

## Trouble Shooting
`Error: Invalid login: 534-5.7.14 534-5.7.14 Please log in via your web browser and then try again`

if you get this message, you'll need to unlock captcha.
https://support.google.com/accounts/answer/2461835?hl=en

After that, you'll run the Firebase Function.