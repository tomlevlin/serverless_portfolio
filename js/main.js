import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "video.tleconsulting.eu",
    'href': "http://video.tleconsulting.eu",
    'desc': "This is my serverless website that consists of a lot of videos taken in Spain. The site is built with the serverless architecture and consists of a process that transcodes video files to some specified formats. The site uses Auto0 for authentication and Google's firebase database for all the videos metadata.",
    'image': {
      'desc': "My serverless videosite.",
      'src': "images/video_tle.png",
      'comment': ""
    }
  },
  {
    'title': "TLE Guru news site.",
    'href': "https://tle.guru",
    'desc': "This is a serverless site where all users can add their own articles for later reading. The site uses an API-Gateway for communicating with the DynamoDB database where all articles are stored. This site uses the AWS Cognito service for user authentication. ",
    'image': {
      'desc': "This is a site where you will find interesting articles.",
      'src': "images/tle.guru.png",
      'comment': ""
    }
  },
  {
    'title': "TLE - URL shortener",
    'href': "https://tle.bz",
    'desc': "This is a simple URL-shortener service created with the serverless architecture. The site uses the API-Gateway for communication with DynamoDB where all URL's are stored.",
    'image': {
      'desc': "The tle.bz URL-shortener service.",
      'src': "images/tle_bz.png",
      'comment': ""
    }
  }

]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
