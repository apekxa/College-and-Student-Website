const colleges = [
    {
        "id": 1,
        "name": "Indian Institute of Technology (IIT) Delhi",
        "location": "New Delhi, India",
        "establishedYear": 1961,
        "ranking": 1,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 5000,
        "facultyCount": 400,
        "campusSize": "325 acres",
        "accreditation": "NAAC A++",
        "contactEmail": "info@iitdelhi.ac.in",
        "contactNumber": "+91 11 2659 7135",
        "website": "https://home.iitd.ac.in/",
        "hostelFacilities": true,
        "placementRate": "95%",
        "averagePackage": "25 LPA",
        "students": [
            { "id": 101, "name": "Amit Sharma", "age": 21, "course": "B.Tech CSE", "year": "3rd", "GPA": 8.5 },
            { "id": 102, "name": "Priya Singh", "age": 22, "course": "B.Tech ECE", "year": "4th", "GPA": 8.9 },
            { "id": 103, "name": "Rahul Verma", "age": 20, "course": "B.Sc Physics", "year": "2nd", "GPA": 7.8 },
            { "id": 104, "name": "Karan Gupta", "age": 23, "course": "M.Tech AI", "year": "1st", "GPA": 9.2 },
            { "id": 105, "name": "Sanya Reddy", "age": 21, "course": "MBA Finance", "year": "1st", "GPA": 8.7 },
            { "id": 106, "name": "Rohit Das", "age": 22, "course": "Ph.D Data Science", "year": "5th", "GPA": 9.5 }
        ]
    },
    {
        "id": 2,
        "name": "National Institute of Technology (NIT) Karnataka",
        "location": "Surathkal, India",
        "establishedYear": 1960,
        "ranking": 2,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 4500,
        "facultyCount": 350,
        "campusSize": "300 acres",
        "accreditation": "NAAC A+",
        "contactEmail": "info@nitk.ac.in",
        "contactNumber": "+91 824 247 4000",
        "website": "https://www.nitk.ac.in/",
        "hostelFacilities": true,
        "placementRate": "92%",
        "averagePackage": "15 LPA",
        "students": [
            { "id": 201, "name": "Sneha Patil", "age": 21, "course": "B.Tech IT", "year": "3rd", "GPA": 8.4 },
            { "id": 202, "name": "Varun Kumar", "age": 22, "course": "B.Tech ME", "year": "4th", "GPA": 7.9 },
            { "id": 203, "name": "Megha Reddy", "age": 20, "course": "B.Sc Maths", "year": "2nd", "GPA": 8.1 },
            { "id": 204, "name": "Ankit Singh", "age": 23, "course": "M.Tech Robotics", "year": "1st", "GPA": 9.3 },
            { "id": 205, "name": "Rashmi K", "age": 21, "course": "MBA Marketing", "year": "1st", "GPA": 8.5 },
            { "id": 206, "name": "Arjun Menon", "age": 22, "course": "Ph.D AI", "year": "5th", "GPA": 9.7 }
        ]
    },
    {
        "id": 3,
        "name": "Indian Institute of Technology (IIT) Bombay",
        "location": "Mumbai, India",
        "establishedYear": 1958,
        "ranking": 3,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 10000,
        "facultyCount": 700,
        "campusSize": "550 acres",
        "accreditation": "NAAC A++",
        "contactEmail": "info@iitb.ac.in",
        "contactNumber": "+91 22 2572 2545",
        "website": "https://www.iitb.ac.in/",
        "hostelFacilities": true,
        "placementRate": "98%",
        "averagePackage": "25 LPA",
        "students": [
            { "id": 301, "name": "Aarav Joshi", "age": 22, "course": "B.Tech CS", "year": "3rd", "GPA": 8.6 },
            { "id": 302, "name": "Priya Shah", "age": 21, "course": "B.Tech ECE", "year": "2nd", "GPA": 8.4 },
            { "id": 303, "name": "Rahul Mehta", "age": 23, "course": "M.Tech AI", "year": "1st", "GPA": 9.1 },
            { "id": 304, "name": "Simran Kaur", "age": 22, "course": "MBA Finance", "year": "1st", "GPA": 8.7 },
            { "id": 305, "name": "Vishal Sharma", "age": 24, "course": "Ph.D Robotics", "year": "3rd", "GPA": 9.5 },
            { "id": 306, "name": "Ishita Verma", "age": 20, "course": "B.Tech Civil", "year": "1st", "GPA": 8.2 }
        ]
    },
    {
        "id": 4,
        "name": "Indian Institute of Technology (IIT) Delhi",
        "location": "New Delhi, India",
        "establishedYear": 1961,
        "ranking": 4,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 8000,
        "facultyCount": 500,
        "campusSize": "320 acres",
        "accreditation": "NAAC A+",
        "contactEmail": "info@iitd.ac.in",
        "contactNumber": "+91 11 2659 7135",
        "website": "https://www.iitd.ac.in/",
        "hostelFacilities": true,
        "placementRate": "95%",
        "averagePackage": "22 LPA",
        "students": [
            { "id": 401, "name": "Neha Gupta", "age": 21, "course": "B.Tech EEE", "year": "2nd", "GPA": 8.3 },
            { "id": 402, "name": "Vikram Desai", "age": 22, "course": "B.Tech ME", "year": "3rd", "GPA": 8.5 },
            { "id": 403, "name": "Amit Saini", "age": 24, "course": "M.Tech Data Science", "year": "1st", "GPA": 9.2 },
            { "id": 404, "name": "Shivani Sharma", "age": 23, "course": "MBA Marketing", "year": "1st", "GPA": 8.8 },
            { "id": 405, "name": "Arun Kumar", "age": 22, "course": "Ph.D Robotics", "year": "4th", "GPA": 9.3 },
            { "id": 406, "name": "Ruchi Bhat", "age": 20, "course": "B.Tech CSE", "year": "2nd", "GPA": 8.1 }
        ]
    },
    {
        "id": 5,
        "name": "Indian Institute of Technology (IIT) Madras",
        "location": "Chennai, India",
        "establishedYear": 1959,
        "ranking": 5,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 9000,
        "facultyCount": 600,
        "campusSize": "250 acres",
        "accreditation": "NAAC A++",
        "contactEmail": "info@iitm.ac.in",
        "contactNumber": "+91 44 2257 8280",
        "website": "https://www.iitm.ac.in/",
        "hostelFacilities": true,
        "placementRate": "97%",
        "averagePackage": "23 LPA",
        "students": [
            { "id": 501, "name": "Ravi Kumar", "age": 22, "course": "B.Tech IT", "year": "3rd", "GPA": 8.7 },
            { "id": 502, "name": "Sanya R", "age": 21, "course": "B.Tech Civil", "year": "2nd", "GPA": 8.2 },
            { "id": 503, "name": "Karan Yadav", "age": 23, "course": "M.Tech Robotics", "year": "1st", "GPA": 9.3 },
            { "id": 504, "name": "Nithya Ramesh", "age": 24, "course": "MBA HR", "year": "1st", "GPA": 8.9 },
            { "id": 505, "name": "Varun P", "age": 22, "course": "Ph.D CS", "year": "4th", "GPA": 9.6 },
            { "id": 506, "name": "Sanjay Menon", "age": 21, "course": "B.Tech Mechanical", "year": "2nd", "GPA": 8.0 }
        ]
    },
    {
        "id": 6,
        "name": "Indian Institute of Technology (IIT) Kanpur",
        "location": "Kanpur, India",
        "establishedYear": 1959,
        "ranking": 6,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 9500,
        "facultyCount": 650,
        "campusSize": "300 acres",
        "accreditation": "NAAC A+",
        "contactEmail": "info@iitk.ac.in",
        "contactNumber": "+91 512 259 0151",
        "website": "https://www.iitk.ac.in/",
        "hostelFacilities": true,
        "placementRate": "96%",
        "averagePackage": "24 LPA",
        "students": [
            { "id": 601, "name": "Anjali Verma", "age": 21, "course": "B.Tech Civil", "year": "3rd", "GPA": 8.3 },
            { "id": 602, "name": "Ravi Singh", "age": 22, "course": "B.Tech Electrical", "year": "2nd", "GPA": 8.1 },
            { "id": 603, "name": "Nikita Gupta", "age": 23, "course": "M.Tech AI", "year": "1st", "GPA": 9.0 },
            { "id": 604, "name": "Karthik R", "age": 24, "course": "Ph.D Robotics", "year": "4th", "GPA": 9.5 },
            { "id": 605, "name": "Shreya Patil", "age": 21, "course": "MBA Marketing", "year": "1st", "GPA": 8.6 },
            { "id": 606, "name": "Amit Kumar", "age": 22, "course": "B.Tech Mechanical", "year": "3rd", "GPA": 8.4 }
        ]
    },
    {
        "id": 7,
        "name": "Indian Institute of Technology (IIT) Roorkee",
        "location": "Roorkee, India",
        "establishedYear": 1847,
        "ranking": 7,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 8000,
        "facultyCount": 500,
        "campusSize": "350 acres",
        "accreditation": "NAAC A++",
        "contactEmail": "info@iitr.ac.in",
        "contactNumber": "+91 1332 285 311",
        "website": "https://www.iitr.ac.in/",
        "hostelFacilities": true,
        "placementRate": "94%",
        "averagePackage": "22 LPA",
        "students": [
            { "id": 701, "name": "Alok Yadav", "age": 22, "course": "B.Tech Electrical", "year": "3rd", "GPA": 8.2 },
            { "id": 702, "name": "Snehal Patil", "age": 21, "course": "B.Tech CSE", "year": "2nd", "GPA": 8.3 },
            { "id": 703, "name": "Rakesh Gupta", "age": 23, "course": "M.Tech Structural Engineering", "year": "1st", "GPA": 9.0 },
            { "id": 704, "name": "Amit Saini", "age": 24, "course": "Ph.D Data Science", "year": "3rd", "GPA": 9.4 },
            { "id": 705, "name": "Shivani Sharma", "age": 22, "course": "MBA Finance", "year": "1st", "GPA": 8.5 },
            { "id": 706, "name": "Ravi Mehta", "age": 21, "course": "B.Tech Chemical", "year": "2nd", "GPA": 8.0 }
        ]
    },
    {
        "id": 8,
        "name": "National Institute of Technology (NIT) Trichy",
        "location": "Tiruchirappalli, India",
        "establishedYear": 1964,
        "ranking": 8,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 7000,
        "facultyCount": 400,
        "campusSize": "250 acres",
        "accreditation": "NAAC A+",
        "contactEmail": "info@nitt.edu",
        "contactNumber": "+91 431 250 1800",
        "website": "https://www.nitt.edu/",
        "hostelFacilities": true,
        "placementRate": "90%",
        "averagePackage": "18 LPA",
        "students": [
            { "id": 801, "name": "Kiran Kumar", "age": 21, "course": "B.Tech Mechanical", "year": "3rd", "GPA": 8.0 },
            { "id": 802, "name": "Neha R", "age": 22, "course": "B.Tech Civil", "year": "2nd", "GPA": 8.1 },
            { "id": 803, "name": "Abhishek Yadav", "age": 23, "course": "M.Tech Electrical", "year": "1st", "GPA": 9.2 },
            { "id": 804, "name": "Meera Desai", "age": 22, "course": "Ph.D AI", "year": "3rd", "GPA": 9.5 },
            { "id": 805, "name": "Ravi Patel", "age": 21, "course": "MBA HR", "year": "1st", "GPA": 8.4 },
            { "id": 806, "name": "Sanjay Yadav", "age": 20, "course": "B.Tech IT", "year": "1st", "GPA": 8.2 }
        ]
    },
    {
        "id": 9,
        "name": "Indian Institute of Technology (IIT) Guwahati",
        "location": "Guwahati, India",
        "establishedYear": 1994,
        "ranking": 9,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 6000,
        "facultyCount": 350,
        "campusSize": "285 acres",
        "accreditation": "NAAC A",
        "contactEmail": "info@iitg.ac.in",
        "contactNumber": "+91 361 258 3000",
        "website": "https://www.iitg.ac.in/",
        "hostelFacilities": true,
        "placementRate": "92%",
        "averagePackage": "20 LPA",
        "students": [
            { "id": 901, "name": "Aakash Gupta", "age": 22, "course": "B.Tech CS", "year": "3rd", "GPA": 8.2 },
            { "id": 902, "name": "Neha Kumar", "age": 21, "course": "B.Tech Electrical", "year": "2nd", "GPA": 8.3 },
            { "id": 903, "name": "Rashmi Joshi", "age": 23, "course": "M.Tech Robotics", "year": "1st", "GPA": 9.0 },
            { "id": 904, "name": "Sandeep Yadav", "age": 22, "course": "Ph.D Data Science", "year": "3rd", "GPA": 9.4 },
            { "id": 905, "name": "Priya Rani", "age": 20, "course": "MBA Marketing", "year": "1st", "GPA": 8.6 },
            { "id": 906, "name": "Ravi Shankar", "age": 21, "course": "B.Tech Civil", "year": "2nd", "GPA": 8.1 }
        ]
    },
    {
        "id": 10,
        "name": "Indian Institute of Technology (IIT) Hyderabad",
        "location": "Hyderabad, India",
        "establishedYear": 2008,
        "ranking": 10,
        "coursesOffered": ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        "totalStudents": 3500,
        "facultyCount": 300,
        "campusSize": "200 acres",
        "accreditation": "NAAC A",
        "contactEmail": "info@iith.ac.in",
        "contactNumber": "+91 40 2301 6000",
        "website": "https://www.iith.ac.in/",
        "hostelFacilities": true,
        "placementRate": "90%",
        "averagePackage": "18 LPA",
        "students": [
            { "id": 111, "name": "Vikram Kumar", "age": 21, "course": "B.Tech IT", "year": "3rd", "GPA": 8.3 },
            { "id": 112, "name": "Kiran Sharma", "age": 22, "course": "B.Tech Mechanical", "year": "2nd", "GPA": 8.0 },
            { "id": 113, "name": "Anjali Saini", "age": 23, "course": "M.Tech AI", "year": "1st", "GPA": 9.1 },
            { "id": 114, "name": "Abhinav Yadav", "age": 22, "course": "Ph.D Robotics", "year": "3rd", "GPA": 9.5 },
            { "id": 115, "name": "Sanya Gupta", "age": 21, "course": "MBA HR", "year": "1st", "GPA": 8.4 },
            { "id": 116, "name": "Shivani Joshi", "age": 20, "course": "B.Tech Electrical", "year": "1st", "GPA": 8.2 }
        ]
    }
]


function displayColleges() {
    const container=document.getElementById("college-container");
    container.innerHTML="";
    for(let i = 0;i<colleges.length;i++) {
        const college=colleges[i];

        const collegeCard = document.createElement("div");
        collegeCard.classList.add("college-card");

        collegeCard.innerHTML = `
            <h2>${college.name}</h2>
            <p><b>Location:</b> ${college.location}</p>
            <p><b>Ranking:</b> ${college.ranking}</p>
            <p><b>Courses Offered:</b> ${college.coursesOffered}</p>
            <p><b>Total Students:</b> ${college.totalStudents}</p>
            <p><b>Placement Rate:</b> ${college.placementRate}</p>
            <p><b>Website:</b> <a href="${college.website}" >Visit</a></p>

            <h3>Students List</h3>
            <table class="students-table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>GPA</th>
                </tr>
                ${college.students.map(student =>`
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.course}</td>
                        <td>${student.GPA}</td>
                    </tr>
                `).join("")}
            </table>`;
        container.appendChild(collegeCard);
    }
}

displayColleges();
