# Project Interview

We’ve created the world’s first platform to create free, secure, automated, and timed coding interviews to recruit the best talent with just a few clicks.

## Installation
Clone repo
```bash
git clone https://github.com/Slingshot-mentoring/Project-Interviewer.git
```

Switch to the myapp folder

```bash
cd myapp/
```
Install node modules
```bash
npm install
```
Run the project
```bash
npm start
```
The project will now be live on http://localhost:3000/

## Usage

### Interviewee End
Each interviewee will be given a unique link. This link will be a combination of the Interview ID and the Interviewee ID. To find these IDs:
1. open the Cloud Firestore in Firebase
2. open the Interviews collection
3. the documents here will be your Interview ID
4. open one of these documents by clicking them
5. click on the interviewees collection (which would be present in the document)
6. the documents here will be your Interviewee ID

Navigate to http://localhost:3000/`interviewID`/`intervieweeID`
(replace interviewID and intervieweeID with the IDs you found right now)

You can now start solving the questions. 

## Contributing
For every new feature create a new branch with the format of `YourFirstName/FeatureYouWantToImplement`. 

For example - `aakarsh/custom-inputs`.

## License
[MIT](https://choosealicense.com/licenses/mit/)