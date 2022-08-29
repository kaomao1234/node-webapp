//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzc4OTQ3LCJleHAiOjE2NjE3ODI1NDcsIm5iZiI6MTY2MTc3ODk0NywianRpIjoiZ28zTTZCbWNJVkwwWDVYciIsInN1YiI6MTEzLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.wxGqk89f3FA9-ZaYdS-7pTftmSAsy2O-tCV8KRGkq7o"; // put access token
const student = {
    student_id: 63363522,
    name: '', 
    age: 19, 
    gender: '', 
    department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "POST",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            formData: {
                message: `HTTP Request :${data.student_id} `,
                student_id: student_id
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}