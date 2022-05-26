# restella API Client

Restella is a simple browser-based Server API Client, much like Postman or ThunderClient. You can make general HTTP requests to various APIs that you are testing or exploring. You can easily view the resulting JSON from the API call within the Results section and revisit old queries within the Request History block. 

### Development and usage instructions
Development:
- Clone repo locally; 
  - `git clone git@github.com:juliannevela/restella-client.git`
  - `cd restella-client`
- Install depenedencies;
  - `npm install`
- Run app
  - `npm run start`
  - Open browser to localhost:3000

Usage: 
- Enter an API url that you want to test (eg. `https://jsonplaceholder.typicode.com/users/1/todos`)
- Select the HTTP request type that you'd like to use (eg. `GET`)
- Press 'GO'
![restella_get](https://user-images.githubusercontent.com/75726146/170579294-b4e4dfd5-89b9-4583-ac52-44ea92d280ae.png)
- Preview JSON results from your API call within the Results section below. 
![restella_results](https://user-images.githubusercontent.com/75726146/170579324-ae2eec65-e503-423f-b0fa-1b09220aa01b.png)
- If you would like to revisit a previous API call you made, you can do so via the `Request History` column on the left. 
![restella_history](https://user-images.githubusercontent.com/75726146/170579314-a382c826-ea63-4ce7-8543-7969a4024969.png)

<hr>

### The Plan

```
.
└── src
├── containers
│ └── restella.jsx
└── components
├── HISTORY
│ ├── item.jsx
│ └── list.jsx
├── CONTROLS
│ └── form.jsx
│ ├── urlInput.jsx
│ ├── methods.jsx
│ └── jsonInput.jsx
└── RES-DISPLAY
└── jsonViewer.jsx
```

### Tools Needed

- React
- react-json-view

### Diagram

![restless-diagram](./restlessDiagram.png)
